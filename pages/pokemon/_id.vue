<template lang="pug">
  section.container.is-fluid.is-family-sans-serif
    div.columns.is-12.is-8-mobile.has-text-centered
      div#pokemon-profile.column.is-5
        section.box
          div.is-flex-direction-row.is-justify-content-center
            figure.image.pokemon-image
                img(src="https://pokeres.bastionbot.org/images/pokemon/1.png")
            div.mt-3
              h3.title.is-4.is-size-5-mobile.is-capitalized.has-text-weight-bold.has-text-grey-darker bubassauro
            b-taglist.is-flex.is-justify-content-center.mt-3
              b-tag(type="is-success") grass
      div#pokemon-tabs.column
        section.box
          div#status
            div.my-0.has-text-left
              h5.subtitle.is-5.has-text-grey-light.is-size-6-mobile.my-2.ml-1 Height: 1,5
              h5.subtitle.is-5.has-text-grey-light.is-size-6-mobile.my-2.ml-1 Weight: 40
          div#bars.mt-3
            div.columns.is-12.is-flex.is-align-items-center.mb-0
              div.column.is-1.is-1-mobile.is-1-tablet.is-1-fullhd
                h5.subtitle.is-5.has-text-grey-light HP
              div.column
                b-progress(type="is-success" :value="80" show-value)
            div.columns.is-12.is-flex.is-align-items-center.mb-0
              div.column.is-1.is-1-mobile.is-1-tablet.is-1-fullhd
                h5.subtitle.is-5.has-text-grey-light AP
              div.column
                b-progress(type="is-danger" :value="65" show-value)
            div.columns.is-12.is-flex.is-align-items-center.mb-0
              div.column.is-1.is-1-mobile.is-1-tablet.is-1-fullhd
                h5.subtitle.is-5.has-text-grey-light  SP
              div.column
                b-progress(type="is-info" :value="30" show-value)
            div.columns.is-12.is-flex.is-align-items-center.mb-0
              div.column.is-1.is-1-mobile.is-1-tablet.is-1-fullhd
                h5.subtitle.is-5.has-text-grey-light DP
              div.column
                b-progress(type="is-warning" :value="75" show-value)
    div.columns.is-12.has-text-centered
      div#pokemon-evolve-chain.column
        section.box
          h1.title.is-5 Hello World Pokemon

</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>

.bordered
  border: 1px solid red

.pokemon-image
  margin-inline: auto!important
  //height: 10rem!important
  //width: 10rem!important

</style>
