<template>
  <div
    class="flex flex-col sm:flex-row sm:justify-start sm:items-stretch bg-card relative"
  >
    <div class="w-full sm:w-36">
      <div class="w-full h-36 sm:w-36 sm:aspect-square bg-black"></div>
    </div>
    <div class="flex-grow p-5 sm:mr-16">
      <h5 class="text-xl my-0">{{ props.game.name }}</h5>
      <span class="text-sm text-primary">Release Date : {{ releaseDate }}</span>
      <p class="text-xs text-primary mt-2 line-clamp-3">
        {{ props.game.summary }}
      </p>
    </div>
    <span
      class="absolute flex justify-center items-center w-10 h-10 rounded-full bg-accent text-xl top-5 sm:top-1/2 sm:-translate-y-1/2 right-5 sm:right-8"
      >{{ roundedRating }}</span
    >
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";
import type { VideoGameType } from "@/types";

const props = defineProps<{ game: VideoGameType }>();

const releaseDate = computed(() => {
  return dayjs(props.game.first_release_date).format("DD/MM/YYYY");
});

const roundedRating = computed(() => {
  return Math.round(props.game.rating);
});
</script>
