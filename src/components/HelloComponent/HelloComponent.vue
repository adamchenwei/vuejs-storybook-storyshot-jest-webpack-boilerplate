<template>
  <div>
    <h1>Hello {{ name }}!</h1>
    <h2 class="wave">H2 Is here</h2>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
 h1 {
   color: orange;
 }
</style>
