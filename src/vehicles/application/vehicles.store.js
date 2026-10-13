import { defineStore } from 'pinia';
import { VehiclesApi } from '../infrastructure/vehicles.api.js';
import { VehicleAssembler } from '../infrastructure/vehicle.assembler.js';

const useVehiclesStore = defineStore('vehicles', {
  state: () => ({
    vehicles: [],
    error: ''
  }),

  actions: {
    async loadVehiclesByCategory(category) {
      this.error = '';
      this.vehicles = [];

      try {
        const api = new VehiclesApi();
        const response = await api.getVehiclesByCategory(category);
        this.vehicles = VehicleAssembler.toEntitiesFromResponse(response);
      } catch (error) {
        this.error = 'unable-to-load-vehicles';
      }
    }
  }
});

export default useVehiclesStore;
