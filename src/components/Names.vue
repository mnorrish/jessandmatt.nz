<template>
    <h1 :class="$style.names">
      <router-link :to="linkTo" exact :class="$style.link">
        <span :class="$style.name1">Jessica</span>
        <span :class="$style.line2">
          <span :class="$style.nameAnd">&amp;</span>
          <span :class="$style.name2">Matthew</span>
        </span>
      </router-link>
    </h1>
</template>

<script>
export default {
  name: 'names',
  data() {
    return {
      linkTo: '/',
    };
  },
};
</script>

<style module lang="stylus">
.names
  text-align: center
  font-family: 'lust-script-display', sans-serif
  font-weight: normal
  font-size: 3rem
  line-height: 1.2
  margin: 0 auto 1rem
  max-width: 6em

  @media screen and (min-width: 32rem)
    font-size: 4rem
    max-width: 6em

.link
  text-decoration: none
  color: inherit

.nameAnd
  font-size: 0.6em
  line-height: 1
  margin: -0.2em 0
  display: block

@media screen and (min-width: 32rem)
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
