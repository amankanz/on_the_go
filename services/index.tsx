/*

import { CarsListResponse } from "@/libs/types";
import { gql, request } from "graphql-request";

export const getCarsList = async (): Promise<CarsListResponse> => {
  const query = gql`
    query MyQuery {
      carLists {
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
          url
        }
      }
    }
  `;

  const result: CarsListResponse = await request(
    "https://ap-south-1.cdn.hygraph.com/content/cm4l4p6jx01pa07usnjqxh309/master",
    query
  );

  return result;
};
*/

/*
import { gql, request } from "graphql-request";
import { CarsListResponse } from "@/libs/types";

export const getCarsList = async (limit: number): Promise<CarsListResponse> => {
  // Generate a random offset for the query
  const randomOffset = Math.floor(Math.random() * 4); // Adjust based on your total car count

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
    limit, // Number of cars to fetch
    offset: randomOffset, // Starting point for fetching
  };

  const result: CarsListResponse = await request(
    "https://ap-south-1.cdn.hygraph.com/content/cm4l4p6jx01pa07usnjqxh309/master",
    query,
    variables
  );

  return result;
};
*/

import { gql, request } from "graphql-request";
import { CarsListResponse } from "@/libs/types";

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
