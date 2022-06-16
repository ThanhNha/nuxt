import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'SIMUS_CART',
    storage: (function () {
      return window.localStorage
    })(),
    paths: ['cart.list'],
  })(store)
}
