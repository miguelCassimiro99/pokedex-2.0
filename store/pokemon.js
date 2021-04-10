export const state = () => ({
  url: 'https://pokeapi.co/api/v2/pokemon',
  pokemons_list: [],

  pokemon: {
    name: '',
    url: '',
    id: null
  },

  poke_blank: {
    name: '',
    url: '',
    id: null,
  }
})

// actions
export const actions = {
  async getPokemonList ({ state, commit }) {

    const res = await this.$axios.get(this.state.pokemon.url)
      .then((res) => {
        const tempArray = res.data.results
        tempArray.forEach(pokemon => {
          commit('updatePokemonName', pokemon.name)
          commit('updatePokemonUrl', pokemon.url)
          let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
          commit('updatePokemonId', pokeIndex)

          commit('addPokemonToList', state.pokemon)
          commit('destroyPokemon')
        })
        console.log(state.pokemons_list)
      })
  }
}

// mutations
export const mutations = {
  updatePokemonName (state, name) {
    state.pokemon.name = name
  },
  updatePokemonUrl (state, url) {
    state.pokemon.url = url
  },
  updatePokemonId (state, id) {
    state.pokemon.id = id
  },

  addPokemonToList(state, pokemon) {
    state.pokemons_list.push(pokemon)
  },

  destroyPokemon (state) {
    state.pokemon = {...state.poke_blank}
  }
}
