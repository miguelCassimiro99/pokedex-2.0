<template lang="pug">
  section.columns.is-desktop
    div(v-for="pokemon in pokemon_list" :key="pokemon.name")
      Card(:title="pokemon.name" :url="pokemon.url")

</template>

<script>
import Card from '@/components/Card'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Card
  },
  data () {
    return {
      pokemon_list: this.$store.state.pokemon.pokemon
    }
  },
  computed: {
    ...mapState(['pokemon']),
  },
  methods: {
    ...mapMutations('pokemon', [
      'addPokemons'
    ]),
    ...mapActions('pokemon', [
      'getPokemonList'
    ])
  },
  mounted () {
    this.$store.dispatch('pokemon/getPokemonList')
  }

}
</script>
