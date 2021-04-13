<template lang="pug">
  section.container.is-fluid
    div.columns.is-12.is-flex.is-flex-direction-row.is-flex-wrap-wrap.is-justify-items-center.is-align-items-center
      div.column.is-one-quarter.is-half-mobile(v-for="pokemon in pokemon_list" :key="pokemon.id")
        Card(
          :pokemonId="pokemon.id"
          :title="pokemon.name"
          :url="pokemon.url"
          :pokemonImageUrl="pokemon.image_url"
          tag="router-link"
          to="`/pokemon/${pokemon.id}`"
        )
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
    // needs to  empty pokemon_list first - make the muttation
    if (this.$store.state.pokemon.pokemons_list.length > 0) {
      this.$store.commit('pokemon/destroyPokemonList')
      this.$store.dispatch('pokemon/getPokemonList')
    } else {
      this.$store.dispatch('pokemon/getPokemonList')
    }
  }

}
</script>
