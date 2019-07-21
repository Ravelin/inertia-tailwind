<template>
  <layout>
    <div>
      <h1 class="mb-4">Welcome</h1>
      <p
        class="text-justify"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam, molestias aliquam inventore, perspiciatis sequi dolorem sit nostrum obcaecati facere ullam! Velit delectus labore harum laudantium amet cumque ut assumenda.</p>
    </div>
  </layout>
</template>

<script>
import Layout from "@/Shared/Layout";

export default {
  components: {
    Layout
  },
  props: {
    foo: ""
  }
};
</script>
