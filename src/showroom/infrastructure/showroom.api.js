import { BaseApi } from '../../shared/infrastructure/base-api.js';
import { BaseEndpoint } from '../../shared/infrastructure/base-endpoint.js';
import { showroomSectionsPath, vehicleInventoryItemsPath } from '../../config.js';

export class ShowroomApi extends BaseApi {
  #showroomSectionsEndpoint;
  #vehicleInventoryItemsEndpoint;

  constructor() {
    super();
    this.#showroomSectionsEndpoint = new BaseEndpoint(this, showroomSectionsPath);
    this.#vehicleInventoryItemsEndpoint = new BaseEndpoint(this, vehicleInventoryItemsPath);
  }

  getShowroomSections() {
    return this.#showroomSectionsEndpoint.getAll();
  }

  getVehicleInventoryItems() {
    return this.#vehicleInventoryItemsEndpoint.getAll();
  }

  createVehicleInventoryItem(command) {
    return this.#vehicleInventoryItemsEndpoint.create(command);
  }
  get showroomSectionsEndpoint() {
    return this.#showroomSectionsEndpoint;
  }
  get showroomVehicleInventoryItemsEndpoint() {
    return this.#vehicleInventoryItemsEndpoint;
  }


}
