<template lang="pug">
  section
    div#hp-bar-section.columns.is-12.is-flex.is-align-items-center.mb-0
      div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
        b-tooltip(label="Healthy Points" position="is-bottom")
          h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light HP
      div.column
        b-progress(v-if="isBarLoading" type="is-success" show-value)
        b-progress(v-else type="is-success" :value="health_points" show-value)
    div#attack-bar-section.columns.is-12.is-flex.is-align-items-center.mb-0
      div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
        b-tooltip(label="Attack Points" position="is-bottom")
          h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light AP
      div.column
        b-progress(v-if="isBarLoading" type="is-danger" show-value)
        b-progress(v-else type="is-danger" :value="attack" show-value)
    div#special-attack-bar-section.columns.is-12.is-flex.is-align-items-center.mb-0
      div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
        b-tooltip(label="Special Attack Points" position="is-bottom")
          h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light SA
      div.column
        b-progress(v-if="isBarLoading" type="is-danger" show-value)
        b-progress(v-else type="is-danger" :value="special_attack" show-value)
    div#defense-bar-sections.columns.is-12.is-flex.is-align-items-center.mb-0
      div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
        b-tooltip(label="Special Defense Points" position="is-bottom")
          h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light DP
      div.column
        b-progress(v-if="isBarLoading" type="is-warning" show-value)
        b-progress(v-else type="is-warning" :value="defense" show-value)
    div#special-defense-bar-sections.columns.is-12.is-flex.is-align-items-center.mb-0
      div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
        b-tooltip(label="Special Defense Points" position="is-bottom")
          h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light SD
      div.column
        b-progress(v-if="isBarLoading" type="is-warning" show-value)
        b-progress(v-else type="is-warning" :value="special_defense" show-value)
    div#speed-bar-section.columns.is-12.is-flex.is-align-items-center.mb-0
      div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
        b-tooltip(label="Speed Points" position="is-bottom")
          h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light  SP
      div.column
        b-progress(v-if="isBarLoading" type="is-info" show-value)
        b-progress(v-else type="is-info" :value="speed" show-value)
</template>
<script>

export default {

  props: {
    health_points: {
      type: Number,
      required: false,
      default: null,
    },
    attack: {
      type: Number,
      required: false,
      default: null,
    },
    special_attack: {
      type: Number,
      required: false,
      default: null
    },
    defense: {
      type: Number,
      required: false,
      default: null,
    },
    special_defense: {
      type: Number,
      required: false,
      default: null,
    },
    speed: {
      type: Number,
      required: false,
      default: null
    },
    isBarLoading: {
      type: Boolean,
      required: true,
      default: false
    }
  }

}
</script>
<style lang="sass">

</style>
