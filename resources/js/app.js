require('./bootstrap');
import Vue from 'vue'
// path to vuetify export
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'
// import moment from 'moment'

Vue.component('vue-app', require('./components/App.vue').default);
/** Full Page Loader */
Vue.component('fpl', require('./components/__partials/FullPageLoader.vue').default);


/** Navigation Guard */
router.beforeEach((to, from, next) => {

    // Find the nearest title element.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) { document.title = nearestWithTitle.meta.title } else { document.title  = 'Vue Client'}

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in. if not, redirect to login page.
        if (!store.state.authentication.token) {
            next({
                path: '/',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }

    } else {
        // make sure to always call next()!
        if (store.state.authentication.token) {
            next({
                path: '/dashboard',
            })
        } else {
            next()
        }
    }
})

new Vue({
    vuetify,
    router,
    store
}).$mount('#app')
