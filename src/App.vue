<template>
  <div>
    <names />
    <intro />
    <navigation />
    <div class="page">
      <transition name="slide">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import names from './components/Names';
import intro from './components/Intro';
import navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    names,
    intro,
    navigation,
  },
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
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

body
  padding: 30vh 0 20vh 0
  margin: 0 2rem
  background-image: url('./assets/art1.svg'), url('./assets/art2.svg')
  background-position: top left, bottom right
  background-repeat: no-repeat, no-repeat
  background-size: 70%, 30%
  min-height: 100%

  @media screen and (orientation: landscape)
    background-size: 45%, 25%


h1, h2, h3, h4, h5, h6
  font-weight: inherit
  margin: 1em 0 0.3em

p
 margin: 0.4em 0 0.8em

a
  text-decoration: underline
  color: rgb(40, 40, 90)

sup
  vertical-align: top

.page
  max-width: 40rem
  margin: -1px auto 0
  position: relative
  padding-top: 1px

.slide-enter-active,
.slide-leave-active
  transition: opacity 0.5s

.slide-enter,
.slide-leave-to
  opacity: 0

.slide-leave-active
  position: absolute

</style>
