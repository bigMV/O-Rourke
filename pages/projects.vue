<template>
  <div class="bg-gray-900 pt-[100px] ">
    <div class="p-12 lg:p-24 " v-for="project in projects" :key="project.id">
      <Transition name="fade" appear>
        <div class="w-2/3 m-auto flex gap-6" v-if="initial">
          <!-- left info -->
          <div class="w-2/3 flex flex-col gap-2">
            <h2 class="text-primary">{{ project.title }}</h2>
            <p :key="project.id">{{ project.date }}</p>
            <p :key="project.id">{{ project.description }}</p>
            <Tag message="Data" class="bg-teal-500 w-1/6" />
          </div>
          <!-- right image -->
          <div class="image w-1/2 bg-slate-500 h-full p-36 rounded hover:">
            <!-- <img src="" alt=""> -->
          </div>
        </div>
      </Transition>

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
    title: 'IBM Data Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 1,
  },
  {
    title: 'CERN Data Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 2,
  },
  {
    title: 'CITIBANK Data Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 3,
  },
  {
    title: 'ESA Data Architect',
    date: 'xx-xxxx - xx-xxxx',
    description: 'Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.Faucibus commodo massa rhoncus, volutpat.Dignissim sed eget risus enim',
    id: 4,
  },
  {
    title: 'Jaguar-LandRover Data Architect',
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