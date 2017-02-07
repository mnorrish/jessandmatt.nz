<template>
  <div :class="$style.intro">
    <p>Are getting married<br :class="$style.smallBreak"> on November 18<sup>th</sup>, 2017<br>3:00pm at Grandview Gardens<br>followed by canapés, drinks,<br :class="$style.smallBreak"> dinner, and dancing</p>
  </div>
</template>

<script>

export default {
  name: 'intro',
};
</script>

<style module lang="stylus">
.intro
  margin-bottom: 2em
  text-align: center

@media screen and (min-width: 32rem)
  .smallBreak
    display: none
</style>
