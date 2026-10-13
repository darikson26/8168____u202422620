<script setup>
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './shared/presentation/components/language-switcher.vue';

const { t } = useI18n();
const logoUrl = 'https://img.logo.dev/astararetail.pe?token=pk_Ahw9js6BR2O7bekDcd18VQ';
</script>

<template>
  <pv-toolbar class="app-toolbar">
    <template #start>
      <pv-image :src="logoUrl" alt="Astara logo" width="24" />
      <span class="ml-2">Astara Showroom Management</span>
    </template>
  </pv-toolbar>
  <div class="flex app-body">
    <aside class="app-sidebar flex flex-column justify-content-between p-2" aria-label="Sidebar">
      <div class="flex flex-column">
        <pv-button as="router-link" to="/home" :label="t('home')" variant="link" />
        <pv-button as="router-link" to="/vehicle/items/new" :label="t('new-vehicle-inventory-item')" variant="link" />
      </div>
      <language-switcher />
    </aside>
    <main class="app-content flex-1">
      <router-view />
    </main>
  </div>
</template>
