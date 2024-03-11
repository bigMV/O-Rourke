<template>
  <div class="lg:pt-[100px]">
    <main class="relative isolate">
      <div class="bg-slate-900 p-6 ">
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
                <NuxtImg format="avif, webp" densities="x1 x2" class="aspect-[14/13] w-full rounded-2xl object-cover"
                  :src="person.imageUrl" alt="My Photo" preload />
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
              <p class="text-secondary">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                mauris semper sed amet
                vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper
                sed amet vitae sed turpis id.</p>
              <p class="mt-8 text-secondary">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id
                et.
                Id
                blandit
                molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                ultrices hac adipiscing egestas.</p>
            </div>
            <div>
              <p class="mt-8 text-secondary">Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies
                tellus felis id dignissim eget.
                Est augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt
                voluptate.</p>
              <p class="mt-8 text-secondary">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id
                et.
                Id
                blandit
                molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
            </div>
          </div>
          <dl
            class="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="statIdx"
              class="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
              <dt class="text-base leading-7 text-secondary">{{ stat.label }}</dt>
              <dd class="text-3xl font-semibold  text-secondary">{{ stat.value }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <!-- Image section -->
      <div class="mt-32 sm:my-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <NuxtImg src="images/About.jpg" format="avif, webp" alt=""
          class="aspect-[9/4] w-full object-cover xl:rounded-3xl" preload />
      </div>
    </main>
  </div>
</template>

<script setup>

const stats = [
  { label: 'Business was founded', value: '2002' },
  { label: 'Engineers Led', value: '50+' },
  { label: 'Data centres managed ', value: '100+' },
  { label: 'Projects led End-to-End', value: '25+' },

]

const team = [
  {
    name: "Brendan O'Rourke",
    role: ' CEO',
    imageUrl:
      '/images/About.jpg',
    location: 'Upsalla, Sweden',
  },
  // More people...
]


</script>