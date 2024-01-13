<template>
  <div class="">
    <Navbar />

    <div class="-mt-[100px] ">
      <slot />
    </div>

    <Footer />

  </div>
</template>

<script setup>
import Navbar from '~/components/navbar/Navbar.vue';
import Footer from '~/components/footer/Footer.vue';



</script>

<style scoped></style>