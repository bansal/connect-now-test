<template>
  <div class="bg-card p-5">
    <h5>Filter Results</h5>
    <InputLabel label="Name (contains)" for="name" />
    <input
      id="name"
      class="input"
      :value="filter.name"
      @keyup="updateName"
      placeholder="Text String"
    />
    <div class="flex flex-col md:flex-row lg:flex-col md:gap-x-5">
      <div>
        <InputLabel label="Minimun Score" for="rating" />
        <input
          id="rating"
          class="input"
          :value="filter.rating"
          @keyup="updateRating"
          placeholder="1-20"
          type="number"
        />
      </div>
      <div class="flex-grow">
        <InputLabel label="Order By" for="order" />
        <div class="flex flex-row">
          <ToggleAsc :value="filter.asc" @update="updateAsc" />
          <SelectOrder :value="filter.order" @update="updateOrder" />
        </div>
      </div>
    </div>
    <div class="mt-3 text-right">
      <button type="button" class="button" @click="clear">clear</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { defaultFilter } from "@/constants";
import InputLabel from "./InputLabel.vue";
import SelectOrder from "./SelectOrder.vue";
import ToggleAsc from "./ToggleAsc.vue";
import type { FilterType } from "@/types";

const props = defineProps<{ filter: FilterType }>();
const emit = defineEmits(["update"]);

const filter = computed(() => {
  return {
    ...defaultFilter,
    ...props.filter,
  };
});
const updateAsc = () => {
  emit("update", {
    ...props.filter,
    asc: !props.filter.asc,
  });
};

const updateName = (e: Event) => {
  emit("update", {
    ...props.filter,
    name: (e.target as HTMLInputElement).value,
  });
};

const updateRating = (e: Event) => {
  emit("update", {
    ...props.filter,
    rating: (e.target as HTMLInputElement).value,
  });
};

const updateOrder = (order: string) => {
  emit("update", {
    ...props.filter,
    order,
  });
};

const clear = () => {
  emit("update", defaultFilter);
};
</script>
