import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'

Vue.use(Vuex)

fb.ordersCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  const ordersArray = [[], [], [], [], []]
  snapshot.forEach(doc => {
    const order = doc.data().order
    order.id = doc.id
    ordersArray[order.type].push(order)
  })
  // console.log('orders', ordersArray)
  store.commit('setOrders', ordersArray)
})

fb.widgetsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  const widgetsArray = []
  snapshot.forEach(doc => {
    const widget = doc.data().widget
    widget.id = doc.id
    widgetsArray.push(widget)
  })
  // console.log('widgets', widgetsArray)
  store.commit('setWidgets', widgetsArray)
})

const store = new Vuex.Store({
  state: {
    uiSidebarOrderVisible: false,
    orders: [],
    widgets: []
  },
  mutations: {
    uiSidebarOrderVisible (state, val) {
      state.uiSidebarOrderVisible = val
    },
    setOrders (state, val) {
      state.orders = val
    },
    setWidgets (state, val) {
      state.widgets = val
    }
  },
  actions: {
    async createOrder ({ state, commit }, order) {
      await fb.ordersCollection.add({
        createdOn: new Date(),
        order: order
      })
    },
    async createWidget ({ state, commit }, widget) {
      await fb.widgetsCollection.add({
        createdOn: new Date(),
        widget: widget
      })
    }
  },
  modules: {
  }
})

export default store
