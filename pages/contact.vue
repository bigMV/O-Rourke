<template>
  <div class=" bg-hero bg-cover bg-center ">
    <div
      class=" w-full flex justify-center gap-48 px-6 py-48 sm:py-40 lg:px-8 flex-col lg:flex-row  bg-gray-900  bg-cover bg-opacity-60">
      <!-- left info col -->

      <div class="mt-6 max-w-2xl flex flex-col gap-8 items-center lg:pt-[100px]">
        <h1 class=" text-4xl text-primary lg:text-6xl text-center ">Contact Me</h1>
      </div>

    </div>
  </div>

  <div class="relative bg-white my-12">
    <div class="mx-auto max-w-7xl lg:flex lg:justify-between lg:gap-12 lg:px-8 xl:justify-end">

      <div class="lg:w-1/3 lg:grow xl:ml-0 m-6">
        <NuxtImg format="webp, avif" densities="x1 x2" class=" bg-gray-50 object-cover rounded-xl"
          src="/images/Talk.jpg" alt="Contact Me" :placeholder="[ '100%', '100%', 75, 5 ]" preload />
      </div>

      <div class="px-6 lg:contents m-6">
        <div class="mx-auto max-w-2xl pb-24  sm:pb-32  lg:ml-8 lg:mr-0 lg:w-1/2 lg:max-w-lg lg:flex-none  xl:w-1/2">

          <h1 class="mt-2  font-bold  text-gray-900 sm:text-4xl">Would you like to discuss a project ?</h1>
          <p class="mt-6 text-xl leading-8 text-gray-700">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
            sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla
            orci
            at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
          <div class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-1/2">


            <div class=" py-4 flex gap-4 items-center">
              <div
                class="bg-slate-900 rounded-full p-4 text-white hover:bg-slate-600 hover:text-accent hover:cursor-pointer transition">
                <Icon name="material-symbols:call" size="2rem" />
              </div>
              <div class="flex gap-4">
                <p class="text-slate-900 font-bold"> Call : </p>
                <p>2135312513</p>

              </div>
            </div>

            <div class=" py-4 flex gap-4 items-center">
              <div
                class="bg-slate-900 rounded-full p-4 text-white hover:bg-slate-600 hover:text-accent hover:cursor-pointer transition">
                <Icon name="material-symbols:mail-sharp" size="2rem" />
              </div>
              <div class="flex gap-4">
                <p class="text-slate-900 font-bold"> Email : </p>
                <p class=""><a href="mailto:mail@email.com">mail@email.com</a></p>

              </div>
            </div>

            <div class=" py-4 flex gap-4 items-start">
              <div
                class="bg-slate-900 rounded-full p-4 text-white hover:bg-slate-600 hover:text-accent hover:cursor-pointer transition">
                <Icon name="material-symbols:location-on-rounded" size="2rem" />
              </div>

              <div class="flex flex-col py-2">
                <div class="flex gap-4">

                </div>
                <p class="text-slate-900 font-bold">Address</p>

                <p class="text-slate-900">Random Street<br />Uppsala<br />Sweden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-900 m-auto flex flex-col lg:flex-row gap-6 items-center justify-center p-6 lg:py-32">
    <h2 class="text-white px-12 text-center">You can download my CV here : </h2>
    <a href="https://drive.google.com/file/d/1eNvqrumUgDe5fCrirg7nUWJeWheK76B_/view?usp=sharing"><button
        class="btn">Download CV</button></a>
  </div>
</template>

<script setup>
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/vue/20/solid'
</script>

<style></style>