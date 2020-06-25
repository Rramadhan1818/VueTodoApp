import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	'title' : "SuperTodos",
  	todos : [{
  		title : 'lari pagi',
  		done : false,
  	},
  	{
  		title : 'Makan Pagi',
  		done : false,
  	}]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
