export const state = () => ({
  url: 'https://pokeapi.co/api/v2/pokemon',
  pokemons_list: [],
  evolution_chain_url: '',
  chainReceived: [],

  pokemon: {
    name: '',
    url: '',
    id: null,
    image_url: ''
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
          // alternative images
          // commit('updatePokemonImageUrl', `https://pokeres.bastionbot.org/images/pokemon/${pokeIndex}.png`)
          commit('updatePokemonImageUrl', `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokeIndex}.png?raw=true`)

          commit('addPokemonToList', state.pokemon)
          commit('destroyPokemon')
        })
        console.log(state.pokemons_list)
      })
  },

  getPokemonSpecies ({ state, commit }, id) {
    this.$axios.get('https://pokeapi.co/api/v2/pokemon-species/' + id)
      .then(res => {
        commit('updateEvolutionChainUrl', res.data.evolution_chain.url)
      })
  },

  getEvolutionChain ({ state, commit }) {
    this.$axios.get(state.evolution_chain_url)
      .then(res => {
        commit('updateChainReceive', res.data.chain)
        console.log(this.chainReceived)
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
  updatePokemonImageUrl (state, imageUrl) {
    state.pokemon.image_url = imageUrl
  },

  addPokemonToList(state, pokemon) {
    state.pokemons_list.push(pokemon)
  },

  destroyPokemon (state) {
    state.pokemon = {...state.poke_blank}
  },

  destroyPokemonList (state) {
    state.pokemons_list = []
  },

  updateEvolutionChainUrl(state, url) {
    state.evolution_chain_url = url
  },

  updateChainReceive(state, chain) {
    state.chainReceived = chain
  }
}
