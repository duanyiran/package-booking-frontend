import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    packageList: []

  },
  getters: {
    getList: function (state) {
      return state.packageList;
    }

  },
  mutations: {
    initPackage: function (state, pageList) {
      state.packageList = pageList;
    }

  },
  actions: {
    addPackage(context) {
      let url = "localhost:10010/employees";
      axios
        .post(url)
        .then(function (response) {
          context.dispatch("getPackage")
        })
    },
    getPackage(context) {
      let url = "localhost:10010/employees";
      axios
        .get(url)
        .then(function (response) {
          context.commit("initPackage", response.data)
        })
    },


  }
})
