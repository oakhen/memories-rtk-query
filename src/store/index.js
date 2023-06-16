import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./slices/userSlice"
import { albumApi } from "./apis/albumApi"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { photoApi } from "./apis/photoApi"

export const store = configureStore({
  reducer: {
    user: userReducer,
    [albumApi.reducerPath]: albumApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumApi.middleware)
      .concat(photoApi.middleware)
  },

  // so yaha pe ek chiz hum dekh sakte hai ki middleware is an array
})

setupListeners(store.dispatch)

/* there are way too many things that are not clear here at all */
export * from "./thunks/fetchUsers"
export * from "./thunks/addUser"
export * from "./thunks/removeUser"
export {
  albumApi,
  useFetchMyAlbumsQuery,
  useAddmyAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumApi"

export {
  useAddmyPhotoMutation,
  useFetchMyPhotosQuery,
  useRemovePhotoMutation,
} from "./apis/photoApi"
