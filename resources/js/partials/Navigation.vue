<template>
  <nav class="bg-red-500 p-6 md:shadow-md sticky">
    <div class="block sm:hidden">
      <label
        for="menu-toggle"
        @click="toggle"
        class="cursor-pointer lg:hidden block float-right -mt-2"
      >
        <svg
          class="fill-current h-3 w-3 text-gray-900"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </label>
      <input type="checkbox" class="hidden" id="menu-toggle" />
    </div>
    <div
      :class="open ? 'block': 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div
        class="sm:flex-grow py-1 text-white text-right text-2xl lg:flex lg:items-center lg:w-auto w-full"
      >
        <inertia-link
          href="/"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 mr-4 hover:text-blue-700 capitalize sm:lowercase md:capitalize lg:normal-case xl:uppercase"
        >home</inertia-link>
        <inertia-link
          href="/about"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 mr-4 hover:text-blue-700 capitalize sm:lowercase md:capitalize lg:normal-case xl:uppercase"
        >about</inertia-link>
        <inertia-link
          href="/contact"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 mr-4 hover:text-blue-700 capitalize sm:lowercase md:capitalize lg:normal-case xl:uppercase"
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
