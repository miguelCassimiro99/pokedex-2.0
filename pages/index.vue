<template lang="pug">
  section.columns.is-desktop
    div(v-for="pokemon in pokemon_list" :key="pokemon.id")
      Card(:pokemonId="pokemon.id" :title="pokemon.name" :url="pokemon.url" :pokemonImageUrl="pokemon.image_url")
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
      pokemon_list: this.$store.state.pokemon.pokemons_list
    }
  },
  computed: {
    ...mapState(['pokemon']),
  },
  methods: {
    ...mapActions('pokemon', [
      'getPokemonList'
    ])
  },
  mounted () {
    this.$store.dispatch('pokemon/getPokemonList')
  }

}
</script>
