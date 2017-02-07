<template>
  <div class="home">
    <h1>
      <span :class="$style.line1">
        <span :class="$style.name1">Jessica</span>
      </span>
      <span :class="$style.line2">
        <span :class="$style.nameAnd">&amp;</span>
        <span :class="$style.name2">Matthew</span>
      </span>
    </h1>
    <p>
      Are getting married on November 18<sup>th</sup>, 2017<br>
      at Grandview Gardens
    </p>
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style scoped lang="stylus">
h1
  font-family: 'lust-script-display', sans-serif
  font-weight: normal
  font-size: 60px
  width: 350px
  margin: 0 auto
</style>

<style module lang="stylus">
.line1,
.line2
  display: block

.line1
  text-align: left

.line2
  text-align: right

.nameAnd
  font-size: 30px
  vertical-align: middle
  display: inline-block
</style>
