<template lang="pug">
  b-taglist.is-flex.is-justify-content-flex-start
    b-tag.is-hidden-mobile(
      v-for="type in pokemon_types"
      :key="type.name"
      :class="`${ type.name }`"
      rounded
      size="is-medium"
    )
      span {{ type.name }}
    b-tag.is-hidden-desktop(
      v-for="type in pokemon_types"
      :key="type.name"
      :class="`${ type.name }`"
      rounded
      size="is-small"
    )
      span {{ type.name }}
</template>
<script>
export default {
  props: {
    pokemon_types: {
      type: Array,
      required: false
    }
  }
}
</script>
<style lang="sass" scoped>
.steel
  background-color: #f4f4f4

.fire
  background-color: #FDDFDF

.grass
  background-color: #0ddd1a
  color: white

.electric
  background-color: #f6df08

.water, .ice
  background-color: #DEF3FD

.ground
  background-color: #f4e7da

.rock
  background-color: #d5d5d4

.fairy
  background-color: #fceaff

.poison
  background-color: #5430d2
  color: white

.bug
  background-color: #f8d5a3

.dragon
  background-color: #97b3e6

.psychic
  background-color: #eaeda1

.flying
  background-color: #F5F5F5

.fighting
  background-color: #E6E0D4

.normal
  background-color: #F5F5F5

</style>
