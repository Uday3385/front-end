import axios, { type AxiosResponse, AxiosRequestHeaders, AxiosInstance } from 'axios';
import { logError } from './env';

const headers = {} as AxiosRequestHeaders;

/**
 * Global error handler.
 */
const errorHandlerResponse = (error: any) => {
    logError('errorHandlerResponse: ', error);
    Promise.reject({ ...error });
};

/**
 * Global success handler.
 */
const successHandler = (response: AxiosResponse<any, any>) => response;

/**
 * Setup Axios instance.
 */
const axiosInstance = axios.create({
    baseURL: '',
});

axiosInstance.defaults.withCredentials = true;

axiosInstance.interceptors.request.use(
    (config) => ({ ...config, headers }),
    (error) => errorHandlerResponse(error),
);

axiosInstance.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandlerResponse(error),
);

// axiosInstance.interceptors.request.use(function (config) {
//     return config;
// });

export { axiosInstance };
