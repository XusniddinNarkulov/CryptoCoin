import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//    method: "GET",
//    url: "https://coinranking1.p.rapidapi.com/coins",
//    params: {
//       referenceCurrencyUuid: "yhjMzLPhuIDl",
//       timePeriod: "24h",
//       "tiers[0]": "1",
//       orderBy: "marketCap",
//       orderDirection: "desc",
//       limit: "50",
//       offset: "0",
//    },
//    headers: {
//       "X-RapidAPI-Key": "16c44be1efmsh44f5951daad4473p14f8d1jsndfeaf754abe0",
//       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
//    },
// };

const cryptoApiHeaders = {
   "X-RapidAPI-Key": "16c44be1efmsh44f5951daad4473p14f8d1jsndfeaf754abe0",
   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
   reducerPath: "cryptoApi",
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCryptos: builder.query({ query: () => createRequest("/coins") }),
   }),
});

console.log(cryptoApi);

export const { useGetCryptosQuery } = cryptoApi;
