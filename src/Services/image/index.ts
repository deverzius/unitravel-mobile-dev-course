import { API } from '../base';
import { Image } from '../interfaces';

const imageApi = API.injectEndpoints({
  endpoints: (build) => ({
    getImage: build.mutation<any, any>({
      query: (data) => ({
        url: 'image',
        method: 'POST',
        body: data?.image_id,
        headers: {
          Authorization: `Bearer ${data?.token}`,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetImageMutation } = imageApi;
