<template lang="pug">
  section.container.is-fluid.is-family-sans-serif#main-content.mt-3
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
                :isBarLoading="isBarLoading"
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
              h1.title.is-6 evolution
    // div.columns.is-12.has-text-centered
    //   div#pokemon-evolve-chain.column.is-hidden-mobile
    //     section.box
    //       h1.title.is-5 Hello World Pokemon

</template>
<script>
import PokemonImage from '@/components/PokemonImage'
import TableStats from '@/components/TableStats'
import BarStats from '@/components/BarStats'
import PokemonMoves from '@/components/PokemonMoves'


export default {
  components: {
    PokemonImage,
    TableStats,
    BarStats,
    PokemonMoves
  },
  data () {
    return {
      pokemon: {
        name: 'bubassaur',
        img: 'https://pokeres.bastionbot.org/images/pokemon/1.png',
        types: [
          { name: 'grass' },
          { name: 'poison' }
        ],
        arrayTest: [
          {
            height: 7,
            weight: 69,
            shape: 'quadruped',
            egg_groups: [
              { name: 'monster' },
              { name: 'plant' }
            ],
            abilities: [
              { name: 'overgrow' },
              { name: 'chlorophyll' }
            ]
          }
        ],
        base_stats: {
          hp: 45,
          ap: 49,
          dp: 49,
          sa: 65,
          sd: 65,
          sp: 45
        },
        moves: [
          { name: 'razor-wind' },
          { name: 'swords-dance' },
          { name: 'cut' },
          { name: 'double-team' },
          { name: 'defense-curl' },
          { name: 'de4erfense-curl' },
          { name: 'defe3nse-curl' },
          { name: 'defese-curl' },
          { name: 'defee-curl' },
          { name: 'defe88nse-curl' },
          { name: 'defeffnse-curl' },
          { name: 'defenserwee-curl' },
          { name: 'defen4se-curl' },
          { name: 'defense-cssurl' },
          { name: 'defewnse-curl' }
        ],
        evolution_chain: [
          'bubassaur',
          'ivysauur',
          'venasaur'
        ]
      },
      isBarLoading: false
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
