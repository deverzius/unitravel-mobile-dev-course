import { API } from '../base';
import { User } from '../interfaces';

const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<User, string>({
      query: (id) => `users/${id}`,
    }),
  }),
  overrideExisting: true,
});

export const { useLazyGetUserQuery } = userApi;