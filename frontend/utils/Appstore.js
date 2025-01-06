import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import signUpReducer from "./Signup_slice";

const persistConfig = {
  key: "root", 
  storage, 
};

const persistedReducer = persistReducer(persistConfig, signUpReducer);

const AppStore = configureStore({
  reducer: {
    Signup: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(AppStore); 
export { AppStore, persistor };
