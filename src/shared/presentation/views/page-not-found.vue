<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
</script>

<template>
  <h1>{{ t('page-not-found') }}</h1>
  <p>{{ t('route-not-found', { path: route.fullPath }) }}</p>
  <pv-button :label="t('go-home')" @click="router.push('/home')" />
</template>
