<template lang="pug">
  section#main-content.container.is-fluid.is-family-sans-serif.mt-3
    b-loading(
      :is-full-page="isFullPageLoading"
      v-model="isLoadingPage"
    )
    div.columns.is-12.is-8-mobile.has-text-centered
      div#pokemon-profile.column.is-5
        PokemonImage(
          :pokemonImageUrl="pokemon.img"
          :pokemonName="pokemon.name"
          :pokemonTypes="pokemon.types"
        )
      div.column
        section.box
          b-tabs#pokemon-tabs.block(position="is-centered")
            b-tab-item(label="About")
              TableStats(
                :pokemonData="pokemon.arrayTest"
                :isTableLoading="false"
              )
            b-tab-item(label="Base Stats")
              BarStats(
                :isBarLoading="isLoadingPage"
                :health_points="pokemon.base_stats.hp"
                :attack="pokemon.base_stats.ap"
                :special_attack="pokemon.base_stats.sa"
                :defense="pokemon.base_stats.dp"
                :special_defense="pokemon.base_stats.sd"
                :speed="pokemon.base_stats.sp"
              )
            b-tab-item(label="Moves")
              PokemonMoves(:moves="pokemon.moves")
            b-tab-item(label="Evolutions")
              EvolutionChain(
                v-if="this.evolutions && this.evolutions.length"
                :evolution_chain="pokemon.evolution_chain"
              )
              p.subtitle.is-4(v-else) nothing to show

</template>
<script>
import PokemonImage from '@/components/PokemonImage'
import TableStats from '@/components/TableStats'
import BarStats from '@/components/BarStats'
import PokemonMoves from '@/components/PokemonMoves'
import EvolutionChain from '@/components/EvolutionChain'

import { mapActions } from 'vuex'

export default {
  components: {
    PokemonImage,
    TableStats,
    BarStats,
    PokemonMoves,
    EvolutionChain

  },
  data () {
    return {
      pokemonId: this.$route.params.id,

      isFullPageLoading: true,
      isLoadingPage: true,
      pokemonMockup: null,
      hasSpecies: false,
      evolutions: {
        url: null
      },
      pokemon: {
        name: null,
        img: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
        types: [],
        arrayTest: [],
        base_stats: {
          hp: 0,
          ap: 0,
          sa: 0,
          dp: 0,
          sd: 0,
          sp: 0
        },
        moves: [],
        evolution_chain: [],
        chain: null
      },
      isBarLoading: false
    }
  },
  mounted () {
    this.isLoadingPage = true
    this.loadPokemonImage(this.pokemonId)
    // this.$store.dispatch('pokemon/getPokemonSpecies', this.pokemonId)
    // this.$store.dispatch('pokemon/getEvolutionChain')
    this.loadPokemon(this.pokemonId)

    setTimeout(() => {
      this.isLoadingPage = false
    }, 3000)
  },

  methods: {
    ...mapActions('pokemon', [
      'getPokemonSpecies',
      'getEvolutionChain'
    ]),
    loadPokemonImage (id) {
      this.pokemon.img = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    },

    loadPokemon (id) {
      this
        .$axios
        .get('https://pokeapi.co/api/v2/pokemon/' + id)
        .then(res => {
          this.pokemonMockup = res.data
          // name
          this.pokemon.name = this.pokemonMockup.name
          // types
          this.pokemonMockup.types.forEach(slot => {
            let type = { name: null }
            type.name = slot.type.name
            this.pokemon.types.push(type)
          })
          // about
          let aboutArray = {
            height: null,
            weight: null,
            abilities: []
          }
          aboutArray.height = this.pokemonMockup.height
          aboutArray.weight = this.pokemonMockup.weight
          this.pokemonMockup.abilities.forEach(a => {
            let ab = { name: null }
            ab.name = a.ability.name
            aboutArray.abilities.push(ab)
          })
          this.pokemon.arrayTest.push(aboutArray)

          // stats
          this.pokemon.base_stats.hp = this.pokemonMockup.stats[0].base_stat
          this.pokemon.base_stats.ap = this.pokemonMockup.stats[1].base_stat
          this.pokemon.base_stats.sa = this.pokemonMockup.stats[2].base_stat
          this.pokemon.base_stats.dp = this.pokemonMockup.stats[3].base_stat
          this.pokemon.base_stats.sd = this.pokemonMockup.stats[4].base_stat
          this.pokemon.base_stats.sp = this.pokemonMockup.stats[5].base_stat

          //moves
          this.pokemonMockup.moves.forEach(m => {
            let move = { name: null }
            move.name = m.move.name

            this.pokemon.moves.push(move)
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
<style lang="sass" scoped>

.tabs ul
  background-color: white!important

.tabs ul
  border: 1px solid red

</style>
