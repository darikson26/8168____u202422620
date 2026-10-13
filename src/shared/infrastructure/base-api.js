import axios from 'axios';
import { apiBaseUrl } from '../../config.js';

export class BaseApi {
  #http;

  constructor(baseUrl = apiBaseUrl) {
    this.#http = axios.create({ baseURL: baseUrl });
  }

  get http() {
    return this.#http;
  }
}
