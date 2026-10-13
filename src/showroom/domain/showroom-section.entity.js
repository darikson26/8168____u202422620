export class ShowroomSection {
  constructor({ id = 0, name = '', vehicleCategory = '', maxCapacity = 0 } = {}) {
    this.id = id;
    this.name = name;
    this.vehicleCategory = vehicleCategory;
    this.maxCapacity = maxCapacity;
  }


  calculateTotalVehicles(items) {
    return items.reduce((total, item) => total + item.quantity, 0);
  }


  calculateAvailableCapacity(items) {
    return this.maxCapacity - this.calculateTotalVehicles(items);
  }

}


