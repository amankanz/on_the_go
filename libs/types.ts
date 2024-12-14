interface CarImage {
  url: string;
}

export interface Car {
  createdAt: string;
  id: string;
  carBrand: string;
  carType: string;
  seat: number;
  name: string;
  price: number;
  publishedAt: string;
  updateAt: string;
  image: CarImage;
}

export interface CarsListResponse {
  carLists: Car[];
}
