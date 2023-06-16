import { faker } from "@faker-js/faker"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const addUser = createAsyncThunk("user/addUser", async () => {
  const response = await axios.post("http://localhost:3001/users", {
    name: faker.person.fullName(),
  })
  return response.data
})
