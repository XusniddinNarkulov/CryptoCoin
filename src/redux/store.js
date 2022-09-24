import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import thunk from "redux-thunk";

import { cryptoApi } from "../services/cryptoApi";

const store = configureStore({
   reducer: { [cryptoApi.reducerPath]: cryptoApi.reducer },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cryptoApi.middleware),
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
