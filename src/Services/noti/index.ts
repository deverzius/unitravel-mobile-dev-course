import { API } from '../base';
import { Notification } from '../interfaces';

const notiApi = API.injectEndpoints({
  endpoints: (build) => ({
    getNotis: build.mutation<Notification, Partial<Notification>>({
      query: (userData) => ({
        url: 'notis',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetNotisMutation } = notiApi;
