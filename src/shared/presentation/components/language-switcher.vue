<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const languageOptions = [
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' }
];

const selectedLanguage = computed({
  get: () => locale.value,
  set: (value) => {
    locale.value = value;
  }
});
</script>

<template>
  <pv-select-button
    v-model="selectedLanguage"
    :options="languageOptions"
    option-label="label"
    option-value="value"
    :allow-empty="false"
  />
</template>
