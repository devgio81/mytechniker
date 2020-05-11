import axios from 'axios'
import Vue from 'vue'
import VueAuthImage from 'vue-auth-image'

// register vue-auth-image directive
Vue.use(VueAuthImage)

if (!process.server) {
// set Authorization header used by axios
  axios.defaults.headers.common.Authorization = localStorage.getItem('auth._token.local')
}
