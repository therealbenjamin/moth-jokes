<template>
  <div class="header">
    <b-navbar type="is-black">
      <b-navbar-item class="logo-wrapper" tag="router-link" :to="{ path: '/' }">
        <b-image
          class="logo-image"
          :src="require('@/assets/logo.jpeg')"
          alt="Norm MacDonald Icon"
        ></b-image>
      </b-navbar-item>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header {
    display: flex;
      &:first-child {
        margin-right: auto;
      }
  }
</style>
