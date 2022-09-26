import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const options = {
   method: "GET",
   url: "https://bing-news-search1.p.rapidapi.com/news",
   params: { safeSearch: "Off", textFormat: "Raw" },
   headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "16c44be1efmsh44f5951daad4473p14f8d1jsndfeaf754abe0",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
   },
};

const cryptoNewsHeaders = {
   "X-BingApis-SDK": "true",
   "X-RapidAPI-Key": "16c44be1efmsh44f5951daad4473p14f8d1jsndfeaf754abe0",
   "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
   reducerPath: "cryptoNewsApi",
   baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints: (builder) => ({
      getCryptoNews: builder.query({
         query: ({ newsCategory, count }) =>
            createRequest(
               `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
            ),
      }),
   }),
});

// console.log(cryptoNewsApi);

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
