<template>
  <div>
    <div v-if="props.loading" class="flex flex-col gap-y-5">
      <ItemPlaceholder v-for="index in 10" :key="index" />
    </div>
    <div v-else>
      <div v-if="filtered.length === 0">
        <ResultsEmpty />
      </div>
      <div v-else class="flex flex-col gap-y-5">
        <VideoGameItem
          v-for="(game, index) in filtered"
          :key="index"
          :game="game"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "@vue/reactivity";
import VideoGameItem from "@/components/VideoGameItem.vue";
import ResultsEmpty from "@/components/ResultsEmpty.vue";
import ItemPlaceholder from "./ItemPlaceholder.vue";
import type { VideoGameType, FilterType } from "@/types";

interface ListProps {
  loading: boolean;
  games: VideoGameType[];
  filter: FilterType;
}
const props = defineProps<ListProps>();

const filtered = computed(() => {
  const { games, filter } = props;
  const { name, rating, order, asc } = filter;
  const filtered = games
    .filter((game: VideoGameType) =>
      name ? game.name.toLowerCase().includes(name.toLowerCase()) : true
    )
    .filter((game: VideoGameType) => (rating ? game.rating >= rating : true));

  return filtered.sort((a: VideoGameType, b: VideoGameType) => {
    return asc
      ? a[order] < b[order]
        ? -1
        : a[order] > b[order]
        ? 1
        : 0
      : a[order] > b[order]
      ? -1
      : a[order] < b[order]
      ? 1
      : 0;
  });
});
</script>
