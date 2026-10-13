import { defineStore } from 'pinia';
import { ShowroomApi } from '../infrastructure/showroom.api.js';
import { ShowroomAssembler } from '../infrastructure/showroom-assembler.js';
import { VehicleInventoryItemAssembler } from '../infrastructure/vehicle-inventory-item.assembler.js';

const useShowroomStore = defineStore('showroom', {
  state: () => ({
    sections: [],
    items: [],
    saving: false,
    error: ''
  }),

  getters: {
    getItemsBySectionId: (state) => (sectionId) => {
      return state.items.filter((item) => item.sectionId === sectionId);
    },

    getAvailableCapacity() {
      return (section) => section.calculateAvailableCapacity(this.getItemsBySectionId(section.id));
    }
  },

  actions: {
    async loadShowroomData() {
      this.error = '';

      try {
        const api = new ShowroomApi();
        const sectionsResponse = await api.getShowroomSections();
        const itemsResponse = await api.getVehicleInventoryItems();
        this.sections = ShowroomAssembler.toEntitiesFromResponse(sectionsResponse);
        this.items = VehicleInventoryItemAssembler.toEntitiesFromResponse(itemsResponse);
      } catch (error) {
        this.error = 'unable-to-load-data';
      }
    },

    async createVehicleInventoryItem(command) {
      this.saving = true;

      try {
        const api = new ShowroomApi();
        const response = await api.createVehicleInventoryItem(command);
        const item = VehicleInventoryItemAssembler.toEntityFromResponse(response);

        if (!item) {
          return false;
        }

        this.items.push(item);
        return true;
      } catch (error) {
        return false;
      } finally {
        this.saving = false;
      }
    }
  }
});

export default useShowroomStore;
