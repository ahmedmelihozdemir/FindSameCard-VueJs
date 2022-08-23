<template>
  <div class="home">
    <MainComponent></MainComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainComponent from '@/components/MainComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    MainComponent,
  },
});
</script>
