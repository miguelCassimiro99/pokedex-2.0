<template lang="pug">
    div.card
      nuxt-link.link-pokemon(:to="`pokemon/${ pokemonId }`")
        header.card-header.has-text-centered.is-flex.is-justify-content-center
          figure.image
            img.is-rounded.pokemon-image( :src="pokemonImageUrl")
        div.card-content.mx-auto
          div.content.is-capitalized.has-text-centered {{ title }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    },
    pokemonId: {
      type: String,
      required: false
    },
    pokemonImageUrl: {
      type: String,
      required: false
    },
  }
}
</script>
<style lang="sass">
img
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -o-user-select: none
  user-select: none

.card
  -moz-user-select: none
  -webkit-user-select: none
  user-select: none
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)
  &:hover
    box-shadow: 0 14px 29px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)

.pokemon-image
  height: 8em!important
  width: 8em!important
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -o-user-select: none
  user-select: none!important

.link-pokemon
  text-decoration: none
  color: black
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active
    text-decoration: none

</style>
