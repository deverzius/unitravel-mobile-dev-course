export interface User {
  email: string;
  phone: string;
  password: string;
  citizen: string;
  username: string;
  image: Image;
}

export interface Image {
  id: string,
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
  start_id: string;
  end_id: string;
  direction: string;
  distance: number;
  walk_time: number;
  drive_time: number;
  route: Image;
}
