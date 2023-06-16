import { faker } from "@faker-js/faker"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const pause = (duration) => {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export const albumApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    fetchFn: async (...args) => {
      await pause(10)
      return fetch(...args)
    },
  }),
  /* advanced things hum dekh ke samajh gaye and normal things biche chod diye */
  endpoints: (builder) => ({
    removeAlbum: builder.mutation({
      invalidatesTags: (results, error, album) => {
        return [{ type: "Album", id: album.id }]
      },
      query: (album) => ({
        url: `/albums/${album.id}`,
        method: "DELETE",
      }),
    }),
    fetchMyAlbums: builder.query({
      providesTags: (result, error, user) => {
        const tags = result.map((result) => ({ type: "Album", id: result.id }))
        tags.push({ type: "UserAlbum", id: user.id })
        return tags
      },

      query: (user) => {
        return {
          url: `/albums`,
          params: { userId: user.id },
          method: "GET",
        }
      },
    }),
    addmyAlbum: builder.mutation({
      invalidatesTags: (results, error, user) => {
        return [{ type: "UserAlbum", id: user }]
      },

      query: (userId) => {
        return {
          url: `/albums`,
          method: "POST",
          body: {
            title: faker.commerce.productName(),
            userId: userId,
          },
        }
      },
    }),
  }),
})

export const {
  useFetchMyAlbumsQuery,
  useAddmyAlbumMutation,
  useRemoveAlbumMutation,
} = albumApi

/* so jo rtk fetch catch hai usme  */
