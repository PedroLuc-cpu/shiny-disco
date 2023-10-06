import axios from "axios";
import { erroInterceptor, responseInterceptors } from "../interceptors";

const Api = axios.create({
 baseURL:"http://localhost:3333"
})

Api.interceptors.response.use(
 (response) => responseInterceptors(response),
 (error) => erroInterceptor(error)
)

export { Api }