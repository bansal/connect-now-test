<template>
  <div class="flex flex-row justify-start items-stretch bg-card">
    <div class="w-36 animate-pulse">
      <div class="w-full aspect-square bg-secondary"></div>
    </div>
    <div class="flex-grow p-5 animate-pulse gap">
      <div class="flex flex-col gap-y-3">
        <div class="h-3 bg-secondary rounded w-1/3"></div>
        <div class="h-3 bg-secondary rounded w-1/3"></div>
        <div class="h-2 bg-secondary rounded w-full mt-2"></div>
        <div class="h-2 bg-secondary rounded w-full"></div>
        <div class="h-2 bg-secondary rounded w-2/3"></div>
      </div>
    </div>
    <div class="flex justify-center items-center pr-5 animate-pulse">
      <span
        class="flex justify-center items-center w-10 h-10 rounded-full bg-secondary text-xl"
      ></span>
    </div>
  </div>
</template>
