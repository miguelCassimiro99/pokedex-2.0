<template lang="pug">
  section.container-fluid.is-flex.is-justify-content-space-around
    div.columns
      div.column(v-for="(evolution, index) in evolution_chain" :key="evolution.name").mx-4
        figure.image.is-128x128
          img.is-rounded.pokemon-image(:src="evolution.img")
        p.subtitle.is-5.is-size-6-mobile.is-capitalized {{ index + 1 }}. {{ evolution.name }}

</template>
<script>

export default {
  props: {
    evolution_chain: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="sass">

</style>
