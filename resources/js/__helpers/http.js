/**
 * Module to handle AXIOS Requests
 */
import axios from 'axios'
import store from '../store'
import router from '../router'

export default () => {
    const instance = axios.create({
        baseURL: store.state.baseUrl,
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
            Authorization: `Bearer ${store.state.authentication.token}`,
            locale: 'en'
        },
    })
    /** Global loader */
    store.commit('__helpers/SET_IS_LOADING', true, {root: true})

    /** Axios Interceptors */
    instance.interceptors.response.use(
        function (response) {
            /** Global loader */
            store.commit('__helpers/SET_IS_LOADING', true, {root: true})

            return response
        },
        function (error) {

            if (error.response.status === 401) {
                store.commit('authentication/DESTROY_TOKEN')
                router.push('/')
            }

            /** Global loader */
            store.commit('__helpers/SET_IS_LOADING', true, {root: true})
            store.commit('__helpers/SET_COMMON_ERRORS', error.response.data.errors, {root: true})

            return Promise.reject(error)
        }
    )

    /** End of Interceptors */
    return instance
}
