<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-4">
          <div
            class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
            <img class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
              src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
              alt="" />
            <div class="absolute inset-0 bg-gray-900 mix-blend-multiply" />


          </div>
        </div>
        <div>
          <div class="  text-gray-700 lg:max-w-lg">
            <p class=" font-semibold leading-7 text-indigo-600">My Mission</p>
            <h1 class="mt-2 text-3xl font-bold  text-gray-900 sm:text-4xl">Lorem ipsum dolor sit amet.</h1>
            <div class="max-w-xl">
              <p class="mt-6">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
                Mattis mauris semper sed amet vitae sed turpis id.</p>
              <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
                molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
              <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit
                molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et
                ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
            </div>
          </div>
          <dl class="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
            <div v-for="(stat, statIdx) in stats" :key="statIdx">
              <dt class="text-sm font-semibold leading-6 text-gray-600">{{ stat.label }}</dt>
              <dd class="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{{ stat.value }}</dd>
            </div>
          </dl>
          <div class="mt-10 flex">
            <a href="/about" class="text-base font-semibold leading-7 text-slate-900">Learn more about me <span
                aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { label: 'Started', value: '2002' },
  { label: 'Projects', value: '25+' },
  { label: 'Countries', value: '5+' },

]
</script>