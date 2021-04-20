<template lang="pug">
  div.main
    nav.main-navbar(
      class="navbar header is-danger"
      role="navigation"
      aria-label="main navigation"
    )
      div.ml-4(class="navbar-brand")
        a(
          class="navbar-item"
          href="/"
        ) Pokedex
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
.main-navbar
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
