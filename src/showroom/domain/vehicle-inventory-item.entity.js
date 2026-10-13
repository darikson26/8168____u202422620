export class VehicleInventoryItem {
  constructor({ id = 0, sectionId = 0, vehicleCategoryId = '', vehicleId = 0, vehicleName = '', quantity = 0, registeredAt = '' } = {})
  {


    this.id = id;
    this.sectionId = sectionId;
    this.vehicleCategoryId = vehicleCategoryId;
    this.vehicleId = vehicleId;
    this.vehicleName = vehicleName;
    this.quantity = quantity;
    this.registeredAt = registeredAt;

  }
}
