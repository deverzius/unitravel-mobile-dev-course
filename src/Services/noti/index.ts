import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../base';
import { Notification } from '../interfaces';

const notiApi = API.injectEndpoints({
  endpoints: (build) => ({
    getNotis: build.mutation<any, any>({
      query: ({ token }) => ({
        url: 'notis',
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetNotisMutation } = notiApi;
