<template>
  <div class="bg-gray-900 lg:pt-[100px]">
    <main class="relative isolate">
      <div class="px-6 ">
        <div
          class="flex flex-col lg:flex-row items-center justify-between gap-6 mx-auto max-w-5xl pt-24 text-center sm:pt-40">
          <!-- Left -->
          <div class="left">
            <h2 class="text-4xl font-bold  text-primary sm:text-6xl">About me</h2>
            <p class="mt-6 text-lg leading-8 text-primary">Here is a bit about my professional story.</p>
          </div>

          <!-- Right -->
          <div class="w-1/2">
            <ul role="list" class="mx-auto mt-20 ">
              <li v-for="person in team" :key="person.name">
                <img class="aspect-[14/13] w-full rounded-2xl object-cover" :src="person.imageUrl" alt="" />
                <h3 class="mt-6 text-lg font-semibold leading-8  text-accent">{{ person.name }}</h3>
                <p class="text-base leading-7 text-primary">{{ person.role }}</p>
                <p class="text-sm leading-6 text-primary">{{ person.location }}</p>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <!-- Content section -->
      <div class="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="grid max-w-xl grid-cols-1 gap-8 text-base leading-7  lg:max-w-none lg:grid-cols-2">
            <div>
              <p class="text-primary">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.</p>
              <p class="mt-8 text-primary">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                blandit
                molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                ultrices hac adipiscing egestas.</p>
            </div>
            <div>
              <p class="mt-8 text-primary">Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies
                tellus felis id dignissim eget.
                Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt
                voluptate.</p>
              <p class="mt-8 text-primary">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
                blandit
                molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
            </div>
          </div>
          <dl class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="statIdx"
              class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
              <dt class="text-base leading-7 text-primary">{{ stat.label }}</dt>
              <dd class="text-3xl font-semibold  text-accent">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Image section -->
      <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2894&q=80"
          alt="" class="aspect-[9/4] w-full object-cover xl:rounded-3xl" />
      </div>

      <!-- Values section -->
      <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold  text-white sm:text-4xl">My Working Methodology</h2>
          <p class="mt-6 text-lg leading-8 text-primary">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
        </div>
        <dl
          class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-primary sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          <div v-for="value in values" :key="value.name" class="relative pl-9">
            <dt class="inline font-semibold text-white">
              <component :is="value.icon" class="absolute left-1 top-1 h-5 w-5 text-accent" aria-hidden="true" />
              {{ value.name }}
            </dt>
            {{ ' ' }}
            <dd class="inline">{{ value.description }}</dd>
          </div>
        </dl>
      </div>






    </main>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/vue/20/solid'


const stats = [
  { label: 'Business was founded', value: '2002' },
  { label: 'Engineers Led', value: '50+' },
  { label: 'Data centres managed ', value: '100+' },
  { label: 'Projects led End-to-End', value: '25+' },

]
const values = [
  {
    name: 'Be world-class.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Take responsibility.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Be supportive.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: UserGroupIcon,
  },
  {
    name: 'Always learning.',
    description: 'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Share everything you know.',
    description: 'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Enjoy downtime.',
    description: 'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: SunIcon,
  },
]
const team = [
  {
    name: "Brendan O'Rourke",
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Upsalla, Sweden',
  },
  // More people...
]


</script>