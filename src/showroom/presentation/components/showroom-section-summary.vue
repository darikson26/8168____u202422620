<script setup>
import { useI18n } from 'vue-i18n';

const props = defineProps({
  section: { type: Object, required: true },
  items: { type: Array, required: true }
});

const { t } = useI18n();
</script>

<template>
  <pv-card>
    <template #title>{{ section.name }}</template>
    <template #content>
      <p v-if="items.length === 0">{{ t('no-vehicles') }}</p>
      <p v-for="item in items" :key="item.id">{{ item.vehicleName }} - {{ item.quantity }}</p>
    </template>
    <template #footer>
      <p>{{ t('total-vehicles') }}: {{ section.calculateTotalVehicles(props.items) }}</p>
      <p>{{ t('available-capacity') }}: {{ section.calculateAvailableCapacity(props.items) }}</p>
    </template>
  </pv-card>
</template>
