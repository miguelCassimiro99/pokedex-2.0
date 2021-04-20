<template lang="pug">
  section.container.is-fluid.is-family-sans-serif#main-content
    div.columns.is-12.is-8-mobile.has-text-centered
      div#pokemon-profile.column.is-5
        section.box
          div.is-flex.is-justify-content-space-evenly
            div
              figure.image.pokemon-image
                  img(src="https://pokeres.bastionbot.org/images/pokemon/1.png")
            div.mt-3
              h3.title.is-3.is-size-5-mobile.is-capitalized.has-text-weight-medium.has-text-grey-darker bubassauro
              b-taglist.is-flex.is-justify-content-flex-start
                b-tag.is-hidden-mobile(type="is-success" rounded size="is-medium") grass
                b-tag.is-hidden-mobile(type="is-primary" rounded size="is-medium") poison
                b-tag.is-hidden-desktop(type="is-success" rounded size="is-small") grass
      div.column
        section.box
          b-tabs#pokemon-tabs.block(position="is-centered")
            b-tab-item(label="About")
              div#height-info.columns.is-12.is-flex.is-align-items.center.mb-0
                div.column.is-2.is-4-mobile.is-1-tablet.is-1-fullhd.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-light.is-capitalized height
                div.column.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-darker.is-capitalized.ml-6 7
              div#weight-info.columns.is-12.is-flex.is-align-items.center.mb-0
                div.column.is-2.is-4-mobile.is-1-tablet.is-1-fullhd.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-light.is-capitalized weight
                div.column.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-darker.is-capitalized.ml-6 69
              div#shape-info.columns.is-12.is-flex.is-align-items.center.mb-0
                div.column.is-2.is-4-mobile.is-1-tablet.is-1-fullhd.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-light.is-capitalized shape
                div.column.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-darker.is-capitalized.ml-6 quadruped
              div#habitat-info.columns.is-12.is-flex.is-align-items.center.mb-0
                div.column.is-2.is-4-mobile.is-1-tablet.is-1-fullhd.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-light.is-capitalized habitat
                div.column.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-darker.is-capitalized.ml-6 grassland
              div#egg-groups-info.columns.is-12.is-flex.is-align-items.center.mb-0
                div.column.is-2.is-4-mobile.is-1-tablet.is-1-fullhd.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-light.is-capitalized egg groups
                div.column.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-darker.is-capitalized.ml-6 monster
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-darker.is-capitalized.ml-6 plant
              div#abilities-info.columns.is-12.is-flex.is-align-items.center.mb-0
                div.column.is-2.is-4-mobile.is-1-tablet.is-1-fullhd.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-light.is-capitalized abilities
                div.column.has-text-left
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-darker.is-capitalized.ml-6 overgrow
                  h5.subtitle.is-5.my-1.is-size-6-mobile.has-text-grey-darker.is-capitalized.ml-6 chlorophyll

            b-tab-item(label="Base Stats")
              div#bars.mt-3
                div#hp-bar-section.columns.is-12.is-flex.is-align-items-center.mb-0
                  div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
                    h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light HP
                  div.column
                    b-progress(type="is-success" :value="80" show-value)
                div#attack-bar-section.columns.is-12.is-flex.is-align-items-center.mb-0
                  div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
                    h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light AP
                  div.column
                    b-progress(type="is-danger" :value="65" show-value)
                div#special-attack-bar-section.columns.is-12.is-flex.is-align-items-center.mb-0
                  div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
                    h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light SA
                  div.column
                    b-progress(type="is-danger" :value="72" show-value)
                div#defense-bar-sections.columns.is-12.is-flex.is-align-items-center.mb-0
                  div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
                    h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light DP
                  div.column
                    b-progress(type="is-warning" :value="75" show-value)
                div#special-defense-bar-sections.columns.is-12.is-flex.is-align-items-center.mb-0
                  div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
                    h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light SD
                  div.column
                    b-progress(type="is-warning" :value="80" show-value)
                div#speed-bar-section.columns.is-12.is-flex.is-align-items-center.mb-0
                  div.column.is-1.is-2-mobile.is-1-tablet.is-1-fullhd
                    h5.subtitle.is-5.is-size-7-mobile.has-text-grey-light  SP
                  div.column
                    b-progress(type="is-info" :value="30" show-value)
            b-tab-item(label="Moves")
              div.container
              h1.title.is-6 moves
            b-tab-item(label="Evolutions")
              h1.title.is-6 evolution
    div.columns.is-12.has-text-centered
      div#pokemon-evolve-chain.column.is-hidden-mobile
        section.box
          h1.title.is-5 Hello World Pokemon

</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>

#main-content
  min-height: 100vh
  max-height: 100vh
  min-width: 100vw
  max-width: 100vw

.tabs ul
  background-color: white!important

.tabs ul
  border: 1px solid red

.pokemon-image
  margin-inline: auto!important
  //height: 10rem!important
  //width: 10rem!important

</style>
