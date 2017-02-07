<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="stylus">
*
  box-sizing: border-box
  padding: 0
  margin: 0

html
  min-height: 100%
  min-width: 320px
  font-family: 'proxima-nova', sans-serif
  font-weight: 300
  font-size: 18px
  line-height: 1.5
  color: rgb(40, 40, 90)
  text-align: center
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

body
  padding: 30vh 0
  margin: 0 2rem
  background-image: url('./assets/art1.svg'), url('./assets/art2.svg')
  background-position: top left, bottom right
  background-repeat: no-repeat, no-repeat
  background-size: 70%, 30%
  min-height: 100%

  @media screen and (orientation: landscape)
    background-size: 45%, 20%
</style>
