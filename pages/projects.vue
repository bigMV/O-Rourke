<template>
  <div class="bg-gray-900 pt-[100px] ">
    <h1 class="text-primary text-center lg:p-24 p-6">Portfolio</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div class=" p-4  " v-for="project in projects" :key="project.id">
        <Transition name="fade" appear>
          <div
            class="w-full m-auto flex flex-col lg:flex-row border rounded-lg border-transparent transition hover:border-teal-500 hover:text-secondary p-4 gap-6"
            v-if="initial">
            <!-- left info -->
            <div class=" flex flex-col gap-2">
              <div class="bg-gray-400 p-2 flex items-center rounded-xl min-h-[150px]">
                <NuxtImg :src="project.logo" format="avif,webp" alt="Logo" class="w-36 m-auto  " loading="lazy"
                  placeholder />
              </div>
              <h2 class="text-primary ">{{ project.title }}</h2>
              <!-- <Tag message="Data" class="bg-teal-500 w-1/2 lg:w-1/3" /> -->

              <p :key="project.id">{{ project.description }}</p>

            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import Tag from '/components/Tag.vue';
const show = ref(true)
const initial = ref(false)

const projects = [
  {
    logo: '/images/logocloud/ibm.png',
    title: ' Technical Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 1,
  },
  {
    logo: '/images/logocloud/tatadark.png',
    title: 'Head of Infrastructure ',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 2,
  },
  {
    logo: '/images/logocloud/Atos.png',
    title: 'Migration Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 3,
  },
  {
    logo: '/images/logocloud/CERN.png',
    title: 'Data Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 5,
  },
  {
    logo: '/images/logocloud/CITI.png',
    title: 'Data Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 5,
  },
  {
    logo: '/images/logocloud/ESA.png',
    title: 'Data Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 5,
  },
  {
    logo: '/images/logocloud/JLR.png',
    title: 'Data Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 5,
  },
]



onMounted(() => {
  // Set appear to true after the initial render

  initial.value = true

});

onUpdated(() => {
  // Set appear to true after the initial render

});
</script>


<style scoped></style>