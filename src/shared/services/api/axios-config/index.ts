import axios from "axios";
import { erroInterceptor, responseInterceptors } from "../interceptors";
import { Environments } from "../../../environments/index"
const Api = axios.create({
 baseURL: Environments.URL_BASE 
})

Api.interceptors.response.use(
 (response) => responseInterceptors(response),
 (error) => erroInterceptor(error)
)

export { Api }