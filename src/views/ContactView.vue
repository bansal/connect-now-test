<template>
  <div class="w-90 md:w-1/2 mx-auto">
    <h1 class="text-xl">GET IN TOUCH</h1>
    <p class="text-sm text-primary mt-5">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi soluta
      obcaecati, cumque voluptatem eaque nam temporibus doloremque delectus
      veniam possimus ex facere ratione quae voluptate repudiandae dignissimos
      explicabo aliquid illum.
    </p>
    <div class="bg-card mt-10 p-5">
      <h5>Contact Form</h5>
      <div class="flex flex-col md:flex-row md:gap-x-8">
        <div class="w-full">
          <InputLabel label="Name" required />
          <input type="text" class="input" />
        </div>
        <div class="w-full">
          <InputLabel label="Email Address" required />
          <input type="email" class="input" />
        </div>
      </div>
      <div>
        <InputLabel label="Message" for="message" />
        <textarea rows="4" class="input"></textarea>
      </div>
      <div class="mt-3 text-right">
        <button class="button" type="button" @click="send">Send</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import InputLabel from "@/components/InputLabel.vue";

const send = () => {
  // send the form
  alert("Sent");
};
</script>
