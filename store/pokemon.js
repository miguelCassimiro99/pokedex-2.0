export const state = () => ({
  url: 'https://pokeapi.co/api/v2/pokemon',
  pokemon: null,
})

// actions
export const actions = {
  async getPokemonList ({ state, commit }) {
    const res = await this.$axios.get(this.state.pokemon.url)
    commit('addPokemons', res.data['results'])
    console.log(state.pokemon)
  }
}

// mutations
export const mutations = {
  addPokemons (state, pokemon) {
    state.pokemon = pokemon
  }
}
