<template>
  <div
    class="relative text-xs bg-secondary flex flex-grow justify-between items-center cursor-pointer"
    @click="toggle"
  >
    <div class="pl-5">{{ seledtedValue }}</div>
    <div class="pr-2">
      <svg
        class="h-3 w-3"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
        />
      </svg>
    </div>
    <div
      class="absolute top-full flex flex-col w-full z-20"
      :class="`${close && 'hidden'}`"
    >
      <div
        class="px-5 py-2 w-full bg-secondary/80 hover:bg-white/80 hover:text-secondary cursor-pointer ease-in duration-200"
        v-for="option in options"
        :key="option.key"
        @click="update(option.key)"
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import { options } from "@/constants";

const props = defineProps<{ value: string }>();
const emit = defineEmits(["update"]);
const close = ref(true);

const seledtedValue = computed(() => {
  const _found = options.find((option) => {
    if (option.key === props.value) return true;
  });
  return _found ? _found.value : "";
});

const update = (key: string) => {
  emit("update", key);
  close.value = false;
};

const toggle = () => {
  close.value = !close.value;
};
</script>
