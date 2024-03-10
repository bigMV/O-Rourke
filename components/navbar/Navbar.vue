<template>
  <header class="sticky top-0 left-0 z-10 transition"
    :class="{ 'bg-slate-900 backdrop-blur-md bg-opacity-50': isSticky }">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
      <NuxtLink to="/" class="">
        <h1 class="text-xl text-primary font-primary tracking-widest ">O'Rourke</h1>
      </NuxtLink>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden md:flex md:gap-12">
        <NuxtLink v-for="                  item                   in navigation" :key="item.name" :to="item.href"
          class="text-md tracking-wider font-secondary font-light leading-6 text-primary decoration-accent underline-offset-4 decoration-2  transition  hover:underline">
          {{
      item.name
    }}</NuxtLink>
      </div>
    </nav>

    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <Transition name="fade" appear>
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-12 w-auto" src="" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <NuxtLink v-for="                  item                   in navigation" :key="item.name"
                  :to="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  @click="mobileMenuOpen = false">
                  {{
      item.name }}</NuxtLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Transition>
    </Dialog>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'


const isSticky = ref(0)

const handleScroll = () => {
  isSticky.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Portfolio', href: '/projects' },
  { name: 'Contact', href: '/contact' },

]

const mobileMenuOpen = ref(false)
</script>

<style lang="scss">
.router-link-active {
  border-bottom: 2px solid #40e0d0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;

}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}
</style>
