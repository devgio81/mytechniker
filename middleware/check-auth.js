export default function ({ store, redirect }) {
  if (!process.server) {
    store.dispatch('checkAuth')
  }
}
