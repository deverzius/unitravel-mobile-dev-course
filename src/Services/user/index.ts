import { API } from '../base';
import { User } from '../interfaces';

const getUserApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.mutation<any, any>({
      query: ({ token }) => ({
        url: 'users',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

const createUserApi = API.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation<any, any>({
      query: (data) => ({
        url: 'users/add-user',
        method: 'POST',
        body: data?.userData,
        headers: {
          Authorization: `Bearer ${data?.token}`,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetUserMutation } = getUserApi;
export const { useCreateUserMutation } = createUserApi;
