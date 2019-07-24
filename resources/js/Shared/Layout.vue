<template>
  <main class="font-sans antialiased mt-0 leading-relaxed">
    <myHeader class="flex flex-col mx-auto lg:px-40"></myHeader>
    <div class="bg-blue-300 w-full sticky top-0">
      <myNav></myNav>
    </div>

    <div class="flex flex-col px-4 mx-auto lg:px-40 mt-2">
      <div class="h-12 text-right">
        <button
          class="bg-transparent hover:bg-blurple-900 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blurple-500 hover:border-transparent rounded"
        >Button</button>
      </div>
      <slot />
      <img src="https://via.placeholder.com/1920x800" />
      <br />
      <img src="https://via.placeholder.com/1920x800" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nisi rem dolore cum rerum corrupti odio sint officiis illum. Explicabo, obcaecati libero doloribus quaerat corrupti dolorem neque officiis veniam nesciunt.</p>
    </div>

    <myFoot class="mt-2"></myFoot>
  </main>
</template>

<style>
</style>

<script>
import myNav from "../partials/Navigation.vue";
import myFoot from "../partials/Footer.vue";
import myHeader from "../partials/Header.vue";

export default {
  components: {
    myNav,
    myFoot,
    myHeader
  }
};
</script>
