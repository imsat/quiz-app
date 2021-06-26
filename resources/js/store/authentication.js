/**
 * Module to handle User Authentication
 * This will be imported in the store/index.js file
 */
import HTTP from '../__helpers/http'
import router from '../router'
import toast from "../services/Notification";
import swal from '../services/SweetAlert';

export default {
    namespaced: true,
    strict: process.env.NODE_ENV !== 'production',
    state: {
        loginInfo: {
            email: 'admin@mail.com',
            password: '123456'
        },
        token: localStorage.getItem('token') || '',
        user: JSON.parse(localStorage.getItem('user')) || [],
    },
    getters: {
        validToLogin(state) {
            if (state.loginInfo.email && state.loginInfo.password) return true
            return false
        },
    },
    mutations: {
        /** Login Email */
        SET_LOGIN_EMAIL(state, value) {
            state.loginInfo.email = value
        },
        /** Login Password */
        SET_LOGIN_PASSWORD(state, value) {
            state.loginInfo.password = value
        },
        /** User Token Set */
        SET_TOKEN(state, token) {
            state.token = token
        },
        /** Remove token */
        'DESTROY_TOKEN'(state) {
            state.token = ''
            state.user = {}
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // delete axios.defaults.headers.common['Authorization'];
        },
        /** Set User */
        SET_USER(state, user) {
            state.user = user;
        },

    },
    actions: {
        /**
         * Login for User
         *
         * @param commit
         * @param state
         * @returns {Promise<Route>}
         */
        async login({commit, state}) {
            return await HTTP().post('/auth/login', state.loginInfo)
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    commit('SET_TOKEN', response.data.token)
                    commit('SET_USER', response.data.user)
                    toast.success('Login successfully');
                    return router.push('/dashboard')
                })
                .catch(error => {
                    console.log(error)
                })

        },
        /**
         * Logout for User
         *
         * @param commit
         */
        logout({commit}) {
            return HTTP().post('/auth/logout')
                .then(response => {
                    commit('DESTROY_TOKEN')
                    return router.push('/')
                })
                .catch(error => {
                    console.log(error)
                })
        },
    }
}
