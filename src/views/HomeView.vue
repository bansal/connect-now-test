<template>
  <main class="grid grid-rows-1 lg:grid-cols-5 gap-6">
    <div class="">
      <VideoGameFilters :filter="state.filter" @update="applyFilter" />
    </div>
    <div class="lg:col-span-4">
      <VideoGameList
        :games="state.games"
        :loading="loading"
        :filter="state.filter"
      />
    </div>
  </main>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { defaultFilter } from "@/constants";
import type { VideoGameType, FilterType } from "@/types";
import VideoGameFilters from "@/components/VideoGameFilters.vue";
import VideoGameList from "@/components/VideoGameList.vue";

const loading = ref(false);

const state = reactive<{
  games: VideoGameType[];
  filter: FilterType;
}>({
  games: [],
  filter: defaultFilter,
});

onMounted(() => {
  fetchData();
});

const applyFilter = (filter: FilterType) => {
  console.log(filter);
  state.filter = filter;
};

const fetchData = async () => {
  console.log("fetching data...");
  loading.value = true;
  const data = await fetch("https://public.connectnow.org.uk/applicant-test/");
  state.games = await data.json();
  loading.value = false;
};
</script>
