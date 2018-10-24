<template>
  <div class="full-width center-content">
    <hello-component name="World" />
  </div>
</template>
<script>
import HelloComponent from '../HelloComponent/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>

<style lang="scss">
  h2 {
    color: mediumseagreen;
    .wave {
      color: orchid;
    }
  }
</style>
