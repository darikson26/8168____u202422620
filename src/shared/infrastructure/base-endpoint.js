export class BaseEndpoint {
  constructor(baseApi, endpointPath) {
    this.http = baseApi.http;
    this.endpointPath = endpointPath;
  }

  getAll() {
    return this.http.get(this.endpointPath);
  }

  create(data) {
    return this.http.post(this.endpointPath, data);
  }
}
