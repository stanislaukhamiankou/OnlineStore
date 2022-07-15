import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
  } from 'axios'
  import { BASE_URL, HTTP_METHODS } from '../helper/api'
  
  interface IRequest<TData = Object> extends Omit<AxiosRequestConfig, 'data'> {
    data?: TData
  }
  
  const defaultConfig: IRequest = {
    baseURL: BASE_URL,
    method: HTTP_METHODS.GET,
    timeout: 30 * 1000,
  }
  
  class Fetcher {
    private instance: AxiosInstance
  
    constructor(config = defaultConfig) {
      const hostURL = config.baseURL || defaultConfig.baseURL
  
      this.instance = axios.create({
        ...defaultConfig,
        ...config,
        baseURL: [ hostURL].join(''),
      })
  
      this.instance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')
  
        if (!token) {
          return config
        }
  
        const headers = {
          Authorization: 'Bearer my-token',
        }
  
        return { ...config, headers }
      })
  
      this.instance.interceptors.response.use(
        (response) => response,
        (error) => Promise.reject(error),
      )
    }
  
    handlerCatch = <TResponse>(e: AxiosError<TResponse>) => {
      const { response } = e
      const { status } = response as AxiosResponse<TResponse>
      if (response) {
        if (status === 401) {
          localStorage.clear()
        }
      }
  
      if (status === 400) {
        localStorage.clear()
      }
  
      throw e
    }
  
    requestToReceive = <TData, TResponse = Object>(
      requestConfig: IRequest<TData>,
    ): Promise<AxiosResponse<TResponse>> => {
      return this.instance
        .request({
          ...requestConfig,
          baseURL:  BASE_URL
        })
        .then((resp) => resp)
        .catch((e: AxiosError<TResponse>) => this.handlerCatch<TResponse>(e))
    }
  }
  
  export default Fetcher
  