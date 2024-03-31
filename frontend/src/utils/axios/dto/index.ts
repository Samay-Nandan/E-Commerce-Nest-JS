import { AxiosHeaders } from 'axios';

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface IRequest {
  url: string;
  method: RequestMethod;
  body?: unknown;
  headers?: AxiosHeaders;
}
