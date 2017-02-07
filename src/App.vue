<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="stylus">
*
  box-sizing: border-box

html
  height: 100%
  min-height: 100%

body
  padding: 60px 0 0
  margin: 0
  background-image: url('./assets/art1.svg'), url('./assets/art2.svg')
  background-position: top left, bottom right
  background-repeat: no-repeat, no-repeat
  background-size: 250px, 100px
  height: 100%
  min-height: 100%

#app
  font-family: 'proxima-nova', sans-serif
  font-weight: 300
  color: rgb(31, 36, 75)
  text-align: center
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
