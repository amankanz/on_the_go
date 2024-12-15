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
