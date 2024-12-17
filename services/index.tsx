import { gql, request } from "graphql-request";
import { CarsListResponse } from "@/libs/types";
import { StoreLocations } from "@/libs/types";

const GRAPHQL_ENDPOINT =
  "https://ap-south-1.cdn.hygraph.com/content/cm4l4p6jx01pa07usnjqxh309/master";

export const getCarsList = async (limit: number): Promise<CarsListResponse> => {
  const totalCars = 31; // Total number of cars in your database
  const randomOffset = Math.floor(
    Math.random() * Math.max(totalCars - limit, 0)
  );

  const query = gql`
    query RandomCars($limit: Int, $offset: Int) {
      carLists(first: $limit, skip: $offset) {
        createdAt
        id
        carBrand
        carType
        seat
        name
        price
        publishedAt
        updatedAt
        image {
          fileName
          url
        }
      }
    }
  `;

  const variables = {
    limit, // Fetch 4 cars at a time
    offset: randomOffset, // Start from a random offset
  };

  const result: CarsListResponse = await request(
    GRAPHQL_ENDPOINT,
    query,
    variables
  );
  return result;
};

// STORE LOCATION
export const storeLocations = async (): Promise<StoreLocations> => {
  const query = gql`
    query MyQuery {
      storeLocations {
        address
      }
    }
  `;

  const result: StoreLocations = await request(GRAPHQL_ENDPOINT, query);

  return result;
};

// BOOKING
// Define the type for form values
interface FormValue {
  location: string;
  pickUpDate: string;
  dropOffDate: string;
  pickUpTime: string;
  dropOffTime: string;
  contactNumber: string;
  userName: string;
  carId: string;
}

export const createBooing = async (formValue: FormValue) => {
  const mutationQuery = gql`
    mutation CreateBooking(
      $contactNumber: String!
      $dropOffDate: String!
      $dropOffTime: String!
      $pickUpDate: String!
      $pickUpTime: String!
      $userName: String!
      $carId: ID!
    ) {
      createBooking(
        data: {
          contactNumber: $contactNumber
          dropOffDate: $dropOffDate
          dropOffTime: $dropOffTime
          pickUpDate: $pickUpDate
          pickUpTime: $pickUpTime
          userName: $userName
          carId: { connect: { id: $carId } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await request(GRAPHQL_ENDPOINT, mutationQuery, formValue);
    return result;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

/*
// Define headers with an authorization token (if required)
const headers = {
  Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzQzNDQ1NjQsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtNGw0cDZqeDAxcGEwN3VzbmpxeGgzMDkvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiI1YjhhOWI2Ni1iMjBlLTQ1ZTAtYjJkMS05ZmEzOWY4NWE3MGYiLCJqdGkiOiJjbTRxdnoyazQwemo0MDdwa2gweGVkdHo4In0.LwaHAi-kLUtgUr4OgcoR5-ndmlFgbNBRfUwcz8Ewc-86--ZYXm1MEaHAaS6z7iOnj52y8F6PuEurMWUXLhYGbrM6Z1ruNCCPuv3IED_G5HXxQ81iLvq8oUz6dO5sV3xBTy5PFG_9uBelFGBjAd9ot7MCXEMoJGGqyjiSNIwVt5Ck9YdcOFNSXn5_iITs6mNUcgDKOffzuYeXt3mRwcN4n_kC6ktGzcIS7VGgnGRvvx0fEFewcHLOJIt16EyPhsE2bii0ge8k3FdYHsOYATc94DnjSMRH4idFhgxArzR9EyMtKqrx7dqC0hkETU-5fGnC06BwjjIHdtpgDe9O75hQR-f7Fke7gnqI0XcypwcKwmN9MiSZ_omi_kIgBmb5oJRwbJJf7HZnopbrwU-RTD2J_1w8R9Arl8gGQDJtfzevn70n4ic9MLh3tQeLge3sRt21EufWuLW39Gttrlu6t8W5Gyw2_JfERaZ74waEdgN46oUerNrK-xKsQn9Y_LUHfxt7zDqrTfV-q3rVlQH-MfbEDjeHw_ncvkheNVjX22ASps065`, // Replace with actual token
};

export const createBooing = async (formValue: FormValue) => {
  const mutationQuery = gql`
    mutation CreateBooking(
      $contactNumber: String!
      $dropOffDate: String!
      $dropOffTime: String!
      $pickUpDate: String!
      $pickUpTime: String!
      $userName: String!
      $carId: ID!
    ) {
      createBooking(
        data: {
          contactNumber: $contactNumber
          dropOffDate: $dropOffDate
          dropOffTime: $dropOffTime
          pickUpDate: $pickUpDate
          pickUpTime: $pickUpTime
          userName: $userName
          carId: { connect: { id: $carId } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await request({
      url: GRAPHQL_ENDPOINT,
      document: mutationQuery,
      variables: formValue,
      requestHeaders: headers, // Include authorization header
    });
    return result;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};
*/
