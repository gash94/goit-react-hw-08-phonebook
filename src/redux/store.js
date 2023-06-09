import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contacts/slice";
import { filterReducer } from "./filter/slice";
import { authReducer } from "./auth/slice";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: false,
    }),
];

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};
export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware,
});

export const persistor = persistStore(store);
