<template>
  <div class=" bg-hero  bg-cover bg-center ">
    <div
      class=" w-full flex justify-center gap-48 px-6 py-32 sm:py-40 lg:px-8 flex-col lg:flex-row  bg-gray-900  bg-cover bg-opacity-60">


      <div class="mt-6 max-w-2xl flex flex-col gap-8 items-center lg:pt-[100px]">
        <h1 class=" text-4xl text-primary lg:text-6xl text-center ">Brendan O'Rourke</h1>
        <h2 class="text-primary">Data Architect</h2>
        <div class="mt-10 flex items-center gap-x-6">
          <NuxtLink to="/projects"
            class="rounded-full bg-accent py-2 px-8 font-regular text-secondary shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iaccent">
            Projects</NuxtLink>
          <NuxtLink to="/contact"
            class="text-sm font-semibold leading-6 text-primary hover:underline decoration-primary underline-offset-4 border py-2 px-4 rounded-full">
            Contact
            me</NuxtLink>
        </div>
      </div>



    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>