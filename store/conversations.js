export const state = () => ({
  items: [{
    id: 'conversation1',
    userId: 'ac58c8c9-33dd-45f9-88b1-8bf406913424',
    subject: 'Broken display for Samsung s10',
    updatedAt: '2020-03-12T19:37:21.935Z'
  }, {
    id: 'conversation2',
    userId: '72faaafe-a5d5-4d6c-a96d-a959a1e6da83',
    subject: 'Broken display for Nokia',
    updatedAt: '2020-03-12T19:37:21.935Z'
  }],
  error: false
})

export const mutations = {
  set (state, items) {
    state.items = items
  },
  fail (state) {
    state.error = true
  }
}

export const getters = {
  get: state => state.items
}

export const actions = {
  async getItems ({ commit }) {
    try {
      const { data } = await this.$axios.$get('/conversations')
      // const userIds = data.map(i => i.userId);
      // const { data: users } = await this.$axios.$post('/users/multiple', )
      commit('set', data)
    } catch (error) {
      commit('fail')
    }
  }
}
