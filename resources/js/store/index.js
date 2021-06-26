import Vue from 'vue'
import Vuex from 'vuex'


import __helpers from './__helpers/__helpers'
import authentication from './authentication'
import quiz from './quiz'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        baseUrl: '/api',
    },
    modules: {
        __helpers,
        authentication,
        quiz,
    },
    getters: {},
    mutations: {},
    actions: {},
})
