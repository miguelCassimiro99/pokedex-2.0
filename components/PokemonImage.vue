<template lang="pug">
  section.box
    div.is-flex.is-justify-content-space-evenly
      div
        figure.image.pokemon-image
          img(:src="pokemonImageUrl")
      div.mt-3
        h3.title.is-3.is-size-5-mobile.is-capitalized.has-text-weight-medium.has-text-grey-darker {{ pokemonName }}
        TypeTags(:pokemon_types="pokemonTypes")
</template>
<script>
import TypeTags from '@/components/TypeTags'
export default {
  components: {
    TypeTags
  },
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
