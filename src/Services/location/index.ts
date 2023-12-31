import { API } from '../base';
import { Location } from '../interfaces';

interface expectedResult {
  data: Location[],
  error: any
}

const getLocationApi = API.injectEndpoints({
  endpoints: (build) => ({
    getLocation: build.mutation<Location, Partial<Location>>({
      query: (userData) => ({
        url: 'locations',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
  overrideExisting: true,
});

const getLocationsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getLocations: build.query<expectedResult, void>({
      query: () => 'locations',
    }),
  }),
  overrideExisting: true,
});

const getFavoriteLocationsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getFavoriteLocations: build.query<expectedResult, void>({
      query: () => 'locations/is-favorite',
    }),
  }),
  overrideExisting: true,
});

const getRecentlyLocationsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getRecentlyLocations: build.query<expectedResult, void>({
      query: () => 'locations/is-recently',
    }),
  }),
  overrideExisting: true,
});

const getRecommendedLocationsApi = API.injectEndpoints({
  endpoints: (build) => ({
    getRecommendedLocations: build.query<expectedResult, void>({
      query: () => 'locations/is-recommended',
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
