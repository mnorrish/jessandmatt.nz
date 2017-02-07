<template>
  <div :class="$style.rsvp">
    <div :class="$style.pull">
      <h2>RSVP by phone or&nbsp;email before&nbsp;July&nbsp;30<sup>th</sup></h2>
      <p :class="$style.contactDetails">Phone 022&nbsp;016&nbsp;5884<br>
        <a href="mailto:norrishmp@gmail.com">norrishmp@gmail.com</a></p>
    </div>
    <div :class="$style.pull">
      <h2>If you can attend we need to&nbsp;know:</h2>
      <ul :class="$style.list">
        <li>Your first and last names<br><em>(with correct spelling!)</em></li>
        <li>Your dietary requirements</li>
        <li>Would you like to take the bus?</li>
        <li>Will you need accommodation?</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rsvp',
};
</script>

<style module lang="stylus">
.list
  margin-left: 2em

@media screen and (min-width: 40rem)
  .rsvp
    display: flex

  .pull
    margin: 0 1em

    &:first-child
      width: 33%
      text-align: center

@media screen and (min-width: 48rem)
  .pull:first-child
      width: 50%

</style>
