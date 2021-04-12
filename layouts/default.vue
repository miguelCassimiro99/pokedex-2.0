<template lang="pug">
  div.main
    nav(
      class="navbar header is-danger"
      role="navigation"
      aria-label="main navigation"
    )
      div.ml-4(class="navbar-brand")
        figure.image.is-128x128
          img(
            src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-1.png"
          )
    div
      nuxt
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
<style lang="sass">
nav
  background-color: #ef5350!important

.main
  background-attachment: fixed
  background-position: center
  background-repeat: repeat
  background-color: #ef5350
  background-image: url("static/pattern.png")

  min-width: 100vw
  max-width: 100vw
  min-height: 100vh
</style>
