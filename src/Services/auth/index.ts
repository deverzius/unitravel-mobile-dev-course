import { API } from '../base';
import { User } from '../interfaces';

const loginApi = API.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<User, Partial<User>>({
      query: (userData) => ({
        url: 'auth',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = loginApi;
