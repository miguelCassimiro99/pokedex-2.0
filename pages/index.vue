<template lang="pug">
  section.container.is-fluid
    b-loading(
      :is-full-page="isFullPageLoading"
      v-model="isLoadingPage"
    )
    .box
      b-pagination(
        @change="onPageChange"
        :total="total"
        v-model="current"
        :range-before="rangeBefore"
        :range-after="rangeAfter"
        :order="order"
        :size="size"
        :simple="isSimple"
        :rounded="isRounded"
        :per-page="perPage"
        :icon-prev="prevIcon"
        :icon-next="nextIcon"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page"
      )
    div.columns.is-12.is-flex.is-flex-direction-row.is-flex-wrap-wrap.is-justify-items-center.is-align-items-center
      div.column.is-one-quarter.is-half-mobile.mt-1(v-for="pokemon in pokemon_list" :key="pokemon.id")
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
import PaginationComponent from '@/components/PaginationComponent'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Card,
    PaginationComponent
  },
  data () {
    return {
      pokemon_list: this.$store.state.pokemon.pokemons_list,
      isFullPageLoading: true,
      isLoadingPage: true,

      perPage: 20,
      rangeBefore: 2,
      rangeAfter: 1,
      order: 'is-centered',
      size: 'is-small',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right',
      current: 1,
      total: 0
    }
  },
  computed: {
    ...mapState(['pokemon']),
  },
  methods: {
    ...mapActions('pokemon', [
      'getPokemonList'
    ]),

    onPageChange (page) {
      console.log(page)
      this.isLoadingPage = true
      this.current = page
      let limit = this.perPage
      let offset = this.perPage * (this.current - 1)

      let params = {
        offset: offset,
        limit: limit
      }

      if (this.$store.state.pokemon.pokemons_list.length > 0) {

        this.$store.commit('pokemon/destroyPokemonList')
        this.$store.dispatch('pokemon/getPokemonList', params)
        this.pokemon_list = this.$store.state.pokemon.pokemons_list
        setTimeout(() => {
          this.isLoadingPage = false
        }, 2000)

      } else {

        this.$store.dispatch('pokemon/getPokemonList', params)
        this.pokemon_list = this.$store.state.pokemon.pokemons_list

        setTimeout(() => {
          this.isLoadingPage = false
        }, 3000)

      }

    },
    loadPagination (url) {
      this.$axios.get(url)
        .then(res => {
          this.total = res.data.count
        })
        .catch(err => console.log(err))
    }

  },
  mounted () {
    // needs to  empty pokemon_list first - make the muttation
    this.isLoadingPage = true
    this.loadPagination(this.$store.state.pokemon.url)
    if (this.$store.state.pokemon.pokemons_list.length > 0) {
      this.$store.commit('pokemon/destroyPokemonList')
      this.$store.dispatch('pokemon/getPokemonList')
    } else {
      this.$store.dispatch('pokemon/getPokemonList')
    }

    this.isLoadingPage = false
  }

}
</script>
<style lang="sass" scoped>

</style>
