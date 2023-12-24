import { API } from '../base';
import { Review } from '../interfaces';

const getReiviewsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getReviews: build.mutation<Review, Partial<Review>>({
      query: (userData) => ({
        url: 'reviews',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
  overrideExisting: true,
});

const addReiviewApi = API.injectEndpoints({
    endpoints: (build) => ({
      addReview: build.mutation<Review, Partial<Review>>({
        query: (userData) => ({
          url: 'reviews/add-review',
          method: 'POST',
          body: userData,
        }),
      }),
    }),
    overrideExisting: true,
  });

export const { useGetReviewsMutation } = getReiviewsApi;
export const { useAddReviewMutation } = addReiviewApi;
