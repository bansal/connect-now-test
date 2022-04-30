<template>
  <nav class="flex flex-col md:flex-row gap-y-10 py-20">
    <RouterLink
      to="/"
      class="text-white text-3xl uppercase mr-20 py font-heading relative z-10"
    >
      <span>Video Games </span>
      <span
        v-if="$route.name === 'home'"
        class="absolute z-[-1] text-secondary -top-8 -left-9 text-6xl font-heading"
        >VIDEO</span
      >
    </RouterLink>
    <RouterLink
      to="/contact"
      class="text-white text-3xl uppercase font-heading relative z-10"
    >
      <span>Contact</span>
      <span
        v-if="$route.name === 'contact'"
        class="absolute z-[-1] text-secondary -top-8 -left-9 text-6xl font-heading"
        >CONTACT</span
      >
    </RouterLink>
  </nav>
</template>
