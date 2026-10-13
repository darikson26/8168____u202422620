<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import useShowroomStore from '../../application/showroom.store.js';
import useVehiclesStore from '../../../vehicles/application/vehicles.store.js';
import { CreateVehicleInventoryItem } from '../../domain/create-vehicle-inventory-item.js';

const { t } = useI18n();
const router = useRouter();
const showroomStore = useShowroomStore();
const vehiclesStore = useVehiclesStore();

const selectedSection = ref(null);
const selectedVehicle = ref(null);
const quantity = ref(1);
const errorMessage = ref('');

onMounted(() => {
  showroomStore.loadShowroomData();
});

function onSectionChange() {
  selectedVehicle.value = null;
  vehiclesStore.loadVehiclesByCategory(selectedSection.value.vehicleCategory);
}

async function createItem() {
  errorMessage.value = '';

  if (!selectedSection.value || !selectedVehicle.value || !quantity.value) {
    errorMessage.value = 'fields-required';
    return;
  }

  if (quantity.value > showroomStore.getAvailableCapacity(selectedSection.value)) {
    errorMessage.value = 'quantity-exceeds-capacity';
    return;
  }

  const command = new CreateVehicleInventoryItem({
    sectionId: selectedSection.value.id,
    vehicleCategoryId: selectedSection.value.vehicleCategory,
    vehicleId: selectedVehicle.value.id,
    vehicleName: selectedVehicle.value.name,
    quantity: quantity.value
  });

  const created = await showroomStore.createVehicleInventoryItem(command);

  if (!created) {
    errorMessage.value = 'unable-to-save-item';
    return;
  }

  router.push('/home');
}

function cancel() {
  router.push('/home');
}
</script>

<template>
  <h1>{{ t('new-vehicle-inventory-item') }}</h1>
  <p>{{ t('add-vehicle-inventory-items') }}</p>
  <div class="flex flex-column gap-2" style="width: 300px">
    <label for="section">{{ t('showroom-section') }}</label>
    <pv-select
      v-model="selectedSection"
      input-id="section"
      :options="showroomStore.sections"
      option-label="name"
      @change="onSectionChange"
    />
    <label for="vehicle">{{ t('vehicle') }}</label>
    <pv-select v-model="selectedVehicle" input-id="vehicle" :options="vehiclesStore.vehicles" option-label="name" />
    <label for="quantity">{{ t('quantity') }}</label>
    <pv-input-number v-model="quantity" input-id="quantity" :min="1" />
    <p v-if="errorMessage">{{ t(errorMessage) }}</p>
    <div class="flex gap-2">
      <pv-button :label="t('create')" aria-label="Create" @click="createItem" />
      <pv-button :label="t('cancel')" aria-label="Cancel" @click="cancel" />
    </div>
  </div>
</template>
