import axios from "axios"

const replicateClient = axios.create({
  baseURL: process.env.REPLICATE_BASE_URL,
  headers: {
    Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
    "Content-Type": "application/json",
    "Accept-Encoding": "*",
  },
})

export default replicateClient
