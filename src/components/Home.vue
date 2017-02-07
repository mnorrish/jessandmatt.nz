<template>
  <div class="home">
    <h1 :class="$style.names">
      <span :class="$style.name1">Jessica</span>
      <span :class="$style.line2">
        <span :class="$style.nameAnd">&amp;</span>
        <span :class="$style.name2">Matthew</span>
      </span>
    </h1>
    <p>
      Are getting married<br :class="$style.smallBreak"> on November 18<sup>th</sup>, 2017<br> at Grandview Gardens
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style module lang="stylus">
.names
  font-family: 'lust-script-display', sans-serif
  font-weight: normal
  font-size: 3rem
  line-height: 1.2
  margin: 0 auto 1rem
  max-width: 6em

  @media screen and (min-width: 32rem)
    font-size: 4rem
    max-width: 6em

.nameAnd
  font-size: 0.6em
  line-height: 1
  margin: -0.2em 0
  display: block

@media screen and (min-width: 32rem)
  .smallBreak
    display: none

  .name1
    display: block
    text-align: left



  .line2
    text-align: right

  .nameAnd
    font-size: 0.6em
    vertical-align: middle
    display: inline-block
    margin: 0
</style>
