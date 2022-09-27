import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { getDefaultNormalizer } from "@testing-library/react";
import thunk from "redux-thunk";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

const store = configureStore({
   reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         cryptoApi.middleware,
         cryptoNewsApi.middleware
      ),
   // middleware: (getDefaultMiddleware) =>
   //    getDefaultMiddleware().concat(cryptoNewsApi.middleware),
   // middleware: [thunk],
   // middleware: (getDefaultMiddleware) =>
   //    getDefaultMiddleware({
   //       thunk: {
   //          extraArgument: cryptoApi,
   //       },
   //    }),
});

// setupListeners(store.dispatch);

export default store;
