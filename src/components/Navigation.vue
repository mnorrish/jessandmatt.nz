<template>
  <nav :class="$style.menu">
    <ul :class="$style.list">
      <li v-for="item in items" :class="$style.listItem">
        <router-link :to="item.to" exact :class="$style.link"  :active-class="$style.linkActive">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      items: [
        { to: '/location', label: 'Venue & Transport' },
        { to: '/accommodation', label: 'Accommodation' },
        { to: '/gifts', label: 'Gifts' },
        { to: '/rsvp', label: 'RSVP' },
      ],
    };
  },
};
</script>

<style module lang="stylus">
.menu
  margin: 1em 0

.list
  list-style-type: none
  display: flex
  flex-wrap: wrap
  flex-direction: column
  justify-content: center

  @media screen and (min-width: 40rem)
    flex-direction: row

.listItem
  display: block

.link
  display: block
  text-decoration: none
  padding: 0.5em 1em
  color: rgb(40, 40, 90)
  background-color: white
  transition: background-color 0.5s, color 0.5s


  @media screen and (min-width: 40rem)
    position: relative
    border-bottom: 1px solid rgb(40, 40, 90)

    &:after
      content: ''
      display: block
      position: absolute
      top: 100%
      left: calc(50% - 10px)
      border-left: 10px solid transparent
      border-right: 10px solid transparent
      border-top: 10px solid transparent
      transition: border-top 0.5s

.linkActive
  background-color: rgb(40, 40, 90)
  color: white

  @media screen and (min-width: 40rem)
    &:after
      border-top: 10px solid rgb(40, 40, 90)
</style>
