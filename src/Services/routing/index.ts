import { API } from '../base';
import { Routing } from '../interfaces';

const routingApi = API.injectEndpoints({
  endpoints: (build) => ({
    getRoute: build.mutation<Routing, Partial<Routing>>({
      query: (userData) => ({
        url: 'routing',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetRouteMutation } = routingApi;
