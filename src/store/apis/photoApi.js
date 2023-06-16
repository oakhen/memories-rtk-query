import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { faker } from "@faker-js/faker"

export const photoApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    removePhoto: builder.mutation({
      invalidatesTags: (results, error, photo) => {
        return [{ type: "Photo", id: photo.id }]
      },
      query: (photo) => {
        return {
          url: `/photos/${photo.id}`,
          method: "DELETE",
        }
      },
    }),
    addmyPhoto: builder.mutation({
      invalidatesTags: (results, error, albumId) => {
        return [{ type: "Album", id: albumId }]
      },
      query: (albumId) => {
        return {
          url: `/photos`,
          method: "POST",
          body: {
            albumId: albumId,
            url: faker.image.url(200, 200, false),
          },
        }
      },
    }),
    fetchMyPhotos: builder.query({
      providesTags: (result, error, album) => {
        const tags = result.map((result) => ({ type: "Photo", id: result.id }))
        tags.push({ type: "Album", id: album.id })
        return tags
      },
      query: (album) => {
        return {
          url: `/photos`,
          params: { albumId: album.id },
          method: "GET", // agar hum yaha pe method describp
        }
      },
    }),
  }),
})

export const {
  useAddmyPhotoMutation,
  useFetchMyPhotosQuery,
  useRemovePhotoMutation,
} = photoApi

/* so rtk query ke internal system ko samajhne me thoda uljhan hai. */
