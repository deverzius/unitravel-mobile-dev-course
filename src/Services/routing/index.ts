import { API } from '../base';
import { Routing } from '../interfaces';

const routingApi = API.injectEndpoints({
  endpoints: (build) => ({
    getRoute: build.mutation<any, any>({
      query: (data) => ({
        url: 'routing',
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

export const { useGetRouteMutation } = routingApi;
