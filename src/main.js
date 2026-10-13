import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Material from '@primeuix/themes/material';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import InputNumber from 'primevue/inputnumber';
import Image from 'primevue/image';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './style.css';
import App from './app.vue';
import router from './router.js';
import pinia from './pinia.js';
import i18n from './i18n.js';

const astaraPreset = definePreset(Material, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    }
  }
});

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: astaraPreset,
    options: {
      darkModeSelector: '.app-dark'
    }
  }
});
app.use(pinia);
app.use(router);
app.use(i18n);

app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.component('pv-select', Select);
app.component('pv-select-button', SelectButton);
app.component('pv-input-number', InputNumber);
app.component('pv-image', Image);

app.mount('#app');
