<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import useShowroomStore from '../../../showroom/application/showroom.store.js';
import ShowroomSection from '../../../showroom/presentation/components/showroom-section.vue';

const { t } = useI18n();
const showroomStore = useShowroomStore();

onMounted(() => {
  showroomStore.loadShowroomData();
});
</script>

<template>
  <h1>{{ t('home') }}</h1>
  <p>{{ t('home-content') }}</p>
  <h2>{{ t('my-showroom-collections') }}</h2>
  <p v-if="showroomStore.error">{{ t(showroomStore.error) }}</p>
  <div class="grid">
    <div v-for="section in showroomStore.sections" :key="section.id" class="col-6">
      <showroom-section :section="section" :items="showroomStore.getItemsBySectionId(section.id)" />
    </div>
  </div>
</template>
