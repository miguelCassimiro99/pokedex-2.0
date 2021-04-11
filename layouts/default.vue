<template lang="pug">
  div.main
    nav(
      class="navbar header has-shadow is-danger"
      role="navigation"
      aria-label="main navigation"
    )
      div(class="navbar-brand")
        a(
          class="navbar-item"
          href="/"
        ) Pokedex
    div( class="container column is-12")
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
.main
  background-attachment: fixed
  background-position: center
  background-repeat: repeat
  background-color: #fafafa
  background-image: url("static/pattern.png")

  min-width: 100vw
  min-height: 100vh
</style>
