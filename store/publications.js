export const state = () => ({
  _DATA: null,
  _USER_PUBLICATIONS: null,
  _ALL_PUBLICATIONS: null,
  _ONE_PUBLICATION: null
})

export const getters = {
  getUserPublications: state => state._USER_PUBLICATIONS,
  getOnePublication: state => state._ONE_PUBLICATION
}

export const mutations = {
  UPDATE_USER_PUBLICATIONS: (state, publications) => state._USER_PUBLICATIONS = publications,
  UPDATE_ONE_PUBLICATION: (state, publication) => state._ONE_PUBLICATION = publication
}

export const actions = {
  updateUserPublications: ({commit}, publications) => commit('UPDATE_USER_PUBLICATIONS', publications),
  updateOnePublication: ({commit}, publication) => commit('UPDATE_ONE_PUBLICATION', publication)
}