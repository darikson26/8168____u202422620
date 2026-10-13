import { VehicleResource } from './vehicle.resource.js';
import {Vehicle} from '../domain/vehicle.entity.js';

export class VehicleAssembler {
  static toEntityFromResource(resource) {
    return new Vehicle({ id: resource.id, name: resource.title, category: resource.category });
  }

  static toEntitiesFromResponse(response) {
    if (response.status !== 200) {
      return [];
    }

    return response.data.product.map((product) => this.toEntityFromResource(new VehicleResource(product)));
  }

}



