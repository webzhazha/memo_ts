import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
      state : {
        list: []
      },
      getters: {
        list: state=>state.list
      },
      mutations: {
        changeList(state,data){
          console.log(data);
          
          state.list = data
        }
      }
})