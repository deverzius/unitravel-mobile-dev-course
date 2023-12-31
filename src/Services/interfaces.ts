export interface User {
  email: string;
  phone: string;
  password: string;
  citizen: string;
  username: string;
  image: Image;
}

export interface Image {
  id: string;
  size: number;
  description: string;
  url: string;
}

export interface Review {
  rate: number;
  content: string;
  user_id: string;
  location_id: string;
}

export interface Location {
  name: string;
  address: string;
  overview: string;
  rate: number;
  main_image: string;
  images: string;
  id: string;
  imageUrl: string;
}

export interface Notification {
  user_id: string;
  title: string;
  content: string;
  send_date: Date;
  sender_id: string;
}

export interface Routing {
  start_id: string;
  end_id: string;
  direction: string;
  distance: number;
  walk_time: number;
  drive_time: number;
  route: Image;
}
