import { API } from '../base';
import { User } from '../interfaces';

const getUserApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.mutation<User, Partial<User>>({
      query: (userData) => ({
        url: 'users',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
  overrideExisting: true,
});

const createUserApi = API.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation<User, Partial<User>>({
      query: (userData) => ({
        url: 'users/add-user',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetUserMutation } = getUserApi;
export const { useCreateUserMutation } = createUserApi;
