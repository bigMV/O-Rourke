<template>
  <div class="py-2 px-8  rounded-br-full ">
    {{ message }}
  </div>
</template>

<script setup>

const props = defineProps({
  message: {
    type: String,
    required: true
  }
})
</script>

<style  scoped></style>