export class CreateVehicleInventoryItem {




  constructor({ sectionId, vehicleCategoryId, vehicleId, vehicleName, quantity }) {
    this.sectionId = sectionId;
    this.vehicleCategoryId = vehicleCategoryId;
    this.vehicleId = vehicleId;
    this.vehicleName = vehicleName;
    this.quantity = quantity;
    this.registeredAt = new Date().toISOString();
  }



}

