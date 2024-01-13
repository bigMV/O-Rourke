<template>
  <div>
    <Hero />
    <Projects />
    <LogoCloud />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
import Hero from '~/components/Hero.vue';
import Projects from '~/components/Projects.vue';
import LogoCloud from '~/components/LogoCloud.vue';
</script>

<style lang="scss" scoped></style>