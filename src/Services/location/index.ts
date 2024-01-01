import { API } from '../base';
import { Location } from '../interfaces';

interface expectedResult {
  data: Location[],
  error: any
}

const getLocationApi = API.injectEndpoints({
  endpoints: (build) => ({
    getLocation: build.mutation<any, any>({
      query: (data) => ({
        url: 'locations',
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

const getLocationsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getLocations: build.query<any, any>({
      query: ({ token }) => ({
        url: 'locations',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

const getFavoriteLocationsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getFavoriteLocations: build.query<any, any>({
      query: ({ token }) => ({
        url: 'locations/is-favorite',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

const getRecentlyLocationsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getRecentlyLocations: build.query<any, any>({
      query: ({ token }) => ({
        url: 'locations/is-recently',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

const getRecommendedLocationsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getRecommendedLocations: build.query<any, any>({
      query: ({ token }) => ({
        url: 'locations/is-recommended',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetLocationMutation } = getLocationApi;
export const { useLazyGetLocationsQuery } = getLocationsApi;
export const { useLazyGetFavoriteLocationsQuery } = getFavoriteLocationsApi;
export const { useLazyGetRecentlyLocationsQuery } = getRecentlyLocationsApi;
export const { useLazyGetRecommendedLocationsQuery } =
  getRecommendedLocationsApi;
