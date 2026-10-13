import { BaseApi } from '../../shared/infrastructure/base-api.js';
import { BaseEndpoint } from '../../shared/infrastructure/base-endpoint.js';
import { vehiclesApiBaseUrl, vehiclesByCategoryPath } from '../../config.js';

export class VehiclesApi extends BaseApi {
  constructor() {


    super(vehiclesApiBaseUrl);

  }

  getVehiclesByCategory(category) {
    const vehiclesEndpoint = new BaseEndpoint(this, `${vehiclesByCategoryPath}/${category}`);
    return vehiclesEndpoint.getAll();
  }
}
