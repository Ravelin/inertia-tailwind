<template>
  <nav class="py-6 flex md:text-xl lg:text-2xl flex flex-col mx-auto lg:px-40">
    <div class="block sm:hidden">
      <label
        for="menu-toggle"
        @click="toggle"
        class="cursor-pointer lg:hidden block float-right -mt-2"
      >
        <svg
          class="fill-current h-3 w-3 text-black hover:border-black hover:text-black-darkest"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input type="checkbox" class="hidden" id="menu-toggle" />
    </div>
    <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:w-auto">
      <div>
        <inertia-link
          href="/"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 mr-4 hover:text-black capitalize sm:lowercase md:capitalize lg:normal-case xl:uppercase"
        >home</inertia-link>
        <inertia-link
          href="/about"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 mr-4 hover:text-black capitalize sm:lowercase md:capitalize lg:normal-case xl:uppercase"
        >about</inertia-link>
        <inertia-link
          href="/contact"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 mr-4 hover:text-black capitalize sm:lowercase md:capitalize lg:normal-case xl:uppercase"
        >contact</inertia-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>


<style>
</style>
