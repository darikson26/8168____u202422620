import { VehicleInventoryItemResource } from './vehicle-inventory-item.resource.js';
import { VehicleInventoryItem } from '../domain/vehicle-inventory-item.entity.js';

export class VehicleInventoryItemAssembler {
  static toEntityFromResource(resource) {
    return new VehicleInventoryItem({ ...resource });
  }

  static toEntityFromResponse(response) {
    if (response.status !== 200 && response.status !== 201) {
      return null;
    }

    return this.toEntityFromResource(new VehicleInventoryItemResource(response.data));
  }

  static toEntitiesFromResponse(response) {
    if (response.status !== 200) {
      return [];
    }

    return response.data.map((item) => this.toEntityFromResource(new VehicleInventoryItemResource(item)));
  } 
  static toResource(model){

    if(model.status !== 200){
      return [];
    }
  }

}

