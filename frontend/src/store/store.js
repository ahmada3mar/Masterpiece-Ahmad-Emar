import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios"
Vue.use(Vuex);
const UPDATE_USERS = 'UPDATE_USERS'
export const store = new Vuex.Store({
    state: {
        user: {},
        loading:true,
    },
    mutations: {
        [UPDATE_USERS](state, users) {
          console.log('mutate users', users)
          state.users = users;
          console.log(state)
        }
      },
    getters: {
      user(state) {
        return state.users
      }
    },

    actions: {
        async getUser() {
          const res = await axios.get("http://localhost:8000/login");
        return console.log(res.data);}}
          
        
      
   
});

