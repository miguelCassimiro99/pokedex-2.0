<template lang="pug">
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
</template>
<script>
import { mapActions, mapMutations } from 'vuex'


export default {
  data () {
    return {
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
  methods: {
    ...mapActions('pokemon', [
      'getPokemonList'
    ]),

    onPageChange (page) {
      console.log(page)
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
      } else {
        this.$store.dispatch('pokemon/getPokemonList', params)
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
    this.loadPagination(this.$store.state.pokemon.url)
  }
}
</script>
