import { API } from '../base';
import { Review } from '../interfaces';

const getReiviewsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.mutation<any, any>({
      query: (data) => ({
        url: 'reviews',
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

const addReiviewApi = API.injectEndpoints({
    endpoints: (build) => ({
      addReview: build.mutation<any, any>({
        query: (data) => ({
          url: 'reviews/add-review',
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

export const { useGetReviewsMutation } = getReiviewsApi;
export const { useAddReviewMutation } = addReiviewApi;
