export const state =  () => ({
  _DATA: null,
  _CATEGORIES: null
})

export const getters = {
  getCategories: state => state._CATEGORIES
}

export const mutations = {
  UPDATE_CATEGORIES: (state, categories) => {
    state._CATEGORIES = categories
  }
}

export const actions = {
  updateCategories: ({commit}, categories) => {
    commit('UPDATE_CATEGORIES', categories)
  }
}