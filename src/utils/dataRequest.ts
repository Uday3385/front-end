import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';

import type { ErrorResponseParams, ProcessResponseType, RequestQueryParams, SuccessResponseParams } from '@/src/types';
import { axiosInstance } from './axios';
import { logError } from './env';

const BASE_HEADER = {};

/**
 * Get the request base URL.
 * Default: process.env.NEXT_PUBLIC_API_BASE_URL.
 * Pass an absolute URL to override base URL. Must be `https`.
 */
export const getRequestBaseUrl = (url: string) => {
    if (url.indexOf('https:') !== -1) return url;
    const normalizeUrlSlash = url.indexOf('/') === 0 ? '' : '/';
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}${normalizeUrlSlash}${url}`;
};

/**
 * Request  headers
 */
export const getRequestHeaders = (config = {} as AxiosRequestConfig<any>) => ({ headers: BASE_HEADER, ...config });

/**
 * Check if request was successful.
 */
export const isResponseSuccessful = (res: AxiosResponse<any, any>) => String(res?.status || '')?.indexOf('20') === 0;

/**
 * Send get request
 * @returns {Promise<any>} Promise
 */
export const sendGetRequest = (
    {
        url,
        successCallback,
        errorCallback,
        finallyCallback,
        data = {},
        config = {} as AxiosRequestConfig<any>,
    }: RequestQueryParams,
    requestType = 'get' as keyof AxiosInstance,
) => {
    const requestConfig = {
        params: data,
        ...config,
    };

    const getRequest = axiosInstance[requestType] as typeof axiosInstance.get;

    return getRequest(getRequestBaseUrl(url), getRequestHeaders(requestConfig))
        .then((res) => successCallback(res))
        .catch((err) => errorCallback(err))
        .finally(finallyCallback);
};

/**
 * Send delete request
 */
export const sendDeleteRequest = (requestArgs: RequestQueryParams) => sendGetRequest(requestArgs, 'delete');

/**
 * Send post request
 */
export const sendPostRequest = (
    {
        url,
        successCallback,
        errorCallback,
        finallyCallback,
        data = {},
        config = {} as AxiosRequestConfig<any>,
    }: RequestQueryParams,
    requestType = 'post' as keyof AxiosInstance,
) => {
    const postRequest = axiosInstance[requestType] as typeof axiosInstance.post;

    return postRequest(getRequestBaseUrl(url), data, getRequestHeaders(config))
        .then((res) => successCallback(res))
        .catch((err) => errorCallback(err))
        .finally(finallyCallback);
};

/**
 * Send patch request
 */
export const sendPatchRequest = (requestArgs: RequestQueryParams) => sendPostRequest(requestArgs, 'patch');

/**
 * Send put request
 */
export const sendPutRequest = (requestArgs: RequestQueryParams) => sendPostRequest(requestArgs, 'put');

/**
 * Check if error code can be ignored
 */
export const canIgnoreErrorCodes = (error: any, ignoreErrorCodes = [] as number[]) => {
    if (ignoreErrorCodes) {
        return ignoreErrorCodes.includes(error?.response?.status);
    }
    return false;
};

/**
 * Handle success response
 */
export const handleSuccessResponse = ({
    response,
    successCallback,
    successMessage = null,
    errorMessage = null,
}: SuccessResponseParams) => {
    if (!isResponseSuccessful(response)) {
        // errorMessage && showSnackBarErrorNotification(errorMessage);
        return null;
    }

    // successMessage && showSnackBarSuccessNotification(successMessage);
    successCallback && successCallback(response);

    return response.data;
};

/**
 * Handle error response
 * @param {Object} args
 * @return {any}
 */
export const handleErrorResponse = ({
    error,
    errorCallback,
    errorMessage = null,
    ignoreErrorCodes,
}: ErrorResponseParams) => {
    logError('handleErrorResponse: ', error, errorMessage);
    if (!canIgnoreErrorCodes(error, ignoreErrorCodes)) {
        // Use the error message from server if available
        const responseError = error?.response?.data;
        if (responseError && responseError?.isError && responseError?.error) {
            // showSnackBarErrorNotification(responseError.message);
        } else {
            // errorMessage && showSnackBarErrorNotification(errorMessage);
        }
    }
    errorCallback && errorCallback(error);
    return error;
};

/**
 * Process request response
 */
export const processResponse = ({
    errorMessage,
    successMessage,
    successCallback,
    errorCallback,
    finallyCallback,
    ...props
}: ProcessResponseType) => {
    return {
        finallyCallback,
        successCallback: (response: AxiosResponse<any, any>) =>
            handleSuccessResponse({
                response,
                errorMessage,
                successMessage,
                successCallback,
                ...props,
            }),
        errorCallback: (error: any) =>
            handleErrorResponse({
                error,
                errorMessage,
                errorCallback,
                ...props,
            }),
    };
};
