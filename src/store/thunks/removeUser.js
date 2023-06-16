import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const removeUser = createAsyncThunk("user/removeUser", async (id) => {
  const response = await axios.delete(`http://localhost:3001/users/${id}`)
  return id
})
