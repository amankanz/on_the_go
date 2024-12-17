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

/*
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
*/

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

// Define headers with an authorization token (if required)
const headers = {
  Authorization: `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzQ0MzE3MDYsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtNGw0cDZqeDAxcGEwN3VzbmpxeGgzMDkvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiI1OGZjNDU5ZS01Zjg1LTRjYTAtOWQzZi0xMTM2YmJiNzlkYWEiLCJqdGkiOiJjbTRzYnV0c28xZGU4MDdwa2RnN28xcW92In0.1LqTAb2jtqPes2VBlsRqula-_weTKij3OaKqFBk9rs0Z751ddBRKMndlhZb30lArGUJv-sjClqWxb4BDj8SGsguViWmms-Zlg6oDBqgQel4J6CP8VStUxALDCx8KVsC3I0Q7Ky6DRgs_eKJKK1GlFzW-CHz6Hw0ilRBHoBahZ8tlUfdfIdZYj-2odrz6LuajZTdEUss46TzxXx80i3azuQXNeb-t4HL2r3PU2_P2JbEsJ7Syv2z0zbnH-MpGlMR3UxvVIYGdXBYsKZIIZ7zvaKJJVIVvlBlNQZEJRgR6uNksEkXI0W93t-oXJ3SpB81vdBdNuYf5zQObj6DGoaluvgkAmcnDcBzTWxBHmOSbZbjpSZSBrnRyrIZg9oZLDQoPxOVaqLBqdprHWxHFUgjkNa5N4wFuqoh9Mos9dVtgMBvOj0GzkDHm3VqdKZWIeegJAHTDPmJ8J7uh5Ep-kz0r8NvZ3DFuwgiE4pPG7FCkzmruQ5xZKcZE0W6w6tLa-QFwuB0Dp2kYjkc2nSG0fsdb2j0w1a1dhgWrTsAg0SpWWAUTZ0u0khKsetf-YYtsZfsHQYQaiZ7ma5nv85WVf1L9TUKGCK9seTBH3wyrPI4RoJiJSySpDmP2mn8v3YAyiLUtRkf8SI0s9UaX6LV4ngmqLWQpXVKqwrO5zbrlriMSMls`, // Replace with actual token
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
