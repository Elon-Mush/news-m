<template>
  <div id="app">
    <keep-alive :include="$store.state.cachedPages">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {
  },
  created () {},
  methods: {}
}
</script>

<style scoped>
.box {
  width: 375px;
  height: 100px;
  background-color: #f40;
}
</style>
