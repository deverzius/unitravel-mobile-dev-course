import { API } from '../base';

export interface User {
  email: string;
  phone: string;
  password: string;
  citizen: string;
  name: string;
  image: Image;
}

export interface Image {
  size: number;
  description: string;
  url: string;
}

export interface Review {
  rate: number;
  content: string;
  user_id: User;
  location_id: Location;
}

export interface Location {
  name: string;
  address: string;
  overview: string;
  rate: number;
  main_image: Image;
  images: Image;
}

export interface Notification {
  user_id: User;
  title: string;
  content: string;
  send_date: Date;
  sender_id: User;
}

export interface Routing {
  start_location: Location;
  end_location: Location;
  direction: string;
  distance: number;
  walk_time: number;
  drive_time: number;
  route: Image;
}

// Authentication

const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (id) => `users/${id}`,
    }),
  }),
  overrideExisting: true,
});

export const { useLazyGetUserQuery } = userApi;
