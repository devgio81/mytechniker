
export const state = () => {
  return {
    auth: false,
    auth_error: null,
    verify: false,
    error: {
      errors: {
        firstname: false,
        lastname: false,
        email: false,
        password: false,
        terms: false
      }
    },
    offer_error: {
      errors: {
        title: false,
        description: false,
        price: false,
        discount_until: false,
        discount_percent: false
      }
    },
    offers: [],
    categories: []
  }
}

export const mutations = {
  SET_ERROR (state, error) {
    state.error = error
  },
  SET_CATEGORIES (state, payload) {
    state.categories = payload
  },
  SET_OFFER_ERROR (state, error) {
    state.offer_error = error
  },
  SET_OFFERS (state, offer) {
    state.offers = offer
  },
  SET_AUTH (state, auth) {
    state.auth = auth
  },
  SET_VERIFY (state, verify) {
    state.verify = verify
  },
  SET_AUTH_ERROR (state, error) {
    state.auth_error = error
  }
}

export const getters = {
  getOffers: state => state.offers,
  getOfferById: state => (id) => {
    return state.offers.find(offer => offer.id === id)
  },
  getOfferError: state => state.offer_error,
  getCategories: state => state.categories,
  getError: state => state.error,
  getAuthError: state => !!state.auth_error,
  loggedInUser: state => state.auth.user.data,
  isLoggedIn: state => state.auth.loggedIn,
  getUserRole: state => state.auth.user.data.role.name,
  getVerifyStatus: state => state.verify
}

export const actions = {
  async register ({ commit }, data) {
    try {
      const config = {
        headers: {
          'Contentq-Type': 'multipart/form-data'
        }
      }
      await this.$axios.$post('/register', data, config)
      this.$router.push('/registrieren-bestaetigt')
    } catch (error) {
      commit('SET_ERROR', error.response.data)
    }
  },

  async loadCategories ({ commit }) {
    try {
      const { data } = await this.$axios.$get('/categories')
      commit('SET_CATEGORIES', data)
    } catch (error) {
    }
  },

  async verifyEmail ({ commit }, token, userId) {
    try {
      const { data } = await this.$axios.$post('/users/verify', {
        token
      })
      commit('SET_VERIFY', data.status)
    } catch (error) {
    }
  },

  async loadOffers ({ commit }) {
    try {
      const { data } = await this.$axios.$get('/offer')
      commit('SET_OFFERS', data)
    } catch (error) {
    }
  },

  async offer ({ commit, dispatch }, data) {
    try {
      const config = {
        headers: {
          'Contentq-Type': 'multipart/form-data'
        }
      }
      await this.$axios.$post('/offer', data, config)
      dispatch('loadOffers')
    } catch (error) {
      commit('SET_OFFER_ERROR', error.response.data)
    }
  },

  async logout ({ commit }) {
    await this.$auth.logout()
    // commit('SET_AUTH', false)
    this.$router.push('/')
  },

  async checkAuth ({ commit }, data) {
    try {
      await this.$axios.$get('/auth/check')
    } catch (error) {
      commit('SET_AUTH', false)
      this.$router.push('/anmelden')
    }
  },

  async login ({ commit }, { email, password }) {
    await this.$auth.loginWith('local', {
      data: {
        email,
        password
      }
    }).then((response) => {
      this.$router.push('/dashboard/home')
    }).catch((error) => {
      commit('SET_AUTH_ERROR', error.response.data)
    })
  }
}
