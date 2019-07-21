<template>
  <main class="font-sans antialiased mt-0 leading-relaxed">
    <myHeader></myHeader>
    <myNav></myNav>

    <div class="container mx-auto px-2 md:mt-2">
      <slot />
      <img src="https://via.placeholder.com/1920x800" />
      <img src="https://via.placeholder.com/1920x800" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nisi rem dolore cum rerum corrupti odio sint officiis illum. Explicabo, obcaecati libero doloribus quaerat corrupti dolorem neque officiis veniam nesciunt.</p>
    </div>

    <myFoot></myFoot>
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
