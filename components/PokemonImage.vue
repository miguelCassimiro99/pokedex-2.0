<template lang="pug">
  section.box
    div.is-flex.is-justify-content-space-evenly
      div
        figure.image.pokemon-image
          img(:src="pokemonImageUrl")
      div.mt-3
        h3.title.is-3.is-size-5-mobile.is-capitalized.has-text-weight-medium.has-text-grey-darker {{ pokemonName }}
        b-taglist.is-flex.is-justify-content-flex-start
          b-tag.is-hidden-mobile(v-for="type in pokemonTypes" :key="type.name"   type="is-success" rounded size="is-medium") {{ type.name }}
        b-taglist.is-flex.is-justify-content-flex-start.is-hidden-desktop
          b-tag.is-hidden-desktop(v-for="type in pokemonTypes" :key="type.name"   type="is-success" rounded size="is-small") {{ type.name }}
</template>
<script>
export default {
  props: {
    pokemonImageUrl: {
      type: String,
      required: false
    },
    pokemonName: {
      type: String,
      required: false
    },
    pokemonTypes: {
      type: Array,
      required: false
    }
  }
}
</script>
<style lang="sass" scoped>

.pokemon-image
  margin-inline: auto!important
//height: 10rem!important
//width: 10rem!important

</style>
