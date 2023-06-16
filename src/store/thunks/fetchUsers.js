import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3001/users")
  // const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  await pause(200)
  return response.data
})

// Dev only pause function

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), duration)
  })
}
/* so ye mereko thik se bilkul samajh nai aya hai */

/* so i think ki mereko promise ke bare me waise v jada kuch nai pata hai. */
