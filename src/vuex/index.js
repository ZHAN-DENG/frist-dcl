
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: null,
        collect: null,
        chatInfo: null
    },
    getters: {
        changeName(state) {
            return state.name
        }
    },
    mutations: {
        changeCollect(state, data) {
            return state.collect = data;
        },
        chatInfo(state, data) {
            return state.chatInfo = data;
        }
    }
});