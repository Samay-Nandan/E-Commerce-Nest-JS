import { toast } from 'react-toastify';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IRequest, RequestMethod, getAdminCookie } from '@src/utils';
import { VITE_BACKEND_URL } from '@src/constant';

axios.defaults.baseURL = VITE_BACKEND_URL;

export const HttpRequest = async (request: IRequest): Promise<unknown> => {
  try {
    const { token } = getAdminCookie();
    const { url, method, body, headers } = request;
    const { GET, POST, PATCH, DELETE } = RequestMethod;
    const config: AxiosRequestConfig = {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };

    const requestMethods = {
      [GET]: axios.get,
      [POST]: axios.post,
      [PATCH]: axios.patch,
      [DELETE]: axios.delete,
    };

    const requestMethod = requestMethods[method];
    if (!requestMethod)
      return {
        message: `Only Methods ${Object.keys(RequestMethod)} are allowed`,
      };

    const response: AxiosResponse = await requestMethod(url, body, config);
    return response.data.result;
  } catch (error: unknown) {
    const errorMessage =
      axios.isAxiosError(error) && error.response
        ? error.response.data.message
        : error instanceof Error
        ? error.message
        : 'An unknown error occurred';
    return toast.error(errorMessage, { toastId: errorMessage });
  }
};
