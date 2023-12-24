import { API } from '../base';
import { Image } from '../interfaces';

const imageApi = API.injectEndpoints({
  endpoints: (build) => ({
    getImage: build.mutation<Image, Partial<Image>>({
      query: (userData) => ({
        url: 'image',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetImageMutation } = imageApi;
