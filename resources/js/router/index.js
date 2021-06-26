import Vue from 'vue'
import Router from 'vue-router'

/** Login Section */
import Login from '../views/auth/Login.vue'
import Dashboard from '../views/dashboard/Dashboard.vue'
import Quiz from '../views/quiz/Quiz.vue'
import AttendQuiz from '../views/quiz/QuizAttend.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        /** Login */
        {
            path: '/',
            alias: '/login',
            component: Login,
            name: 'login',
            meta: {
                title: 'Login',
                description: 'Login panel',
                requiresAuth: false,

            }
        },
        /** Dashboard */
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                title: 'Dashboard',
                description: 'Dashboard',
                requiresAuth: true,

            }
        },
        /** Quiz */
        {
            path: '/quizzes',
            component: Quiz,
            name: 'quiz',
            meta: {
                title: 'Quiz',
                description: 'Quiz',
                requiresAuth: true,

            }
        },
        /** User Profile*/
        {
            path: '/quizzes/:id',
            component: AttendQuiz,
            name: 'attend-quiz',
            meta: {
                title: 'Quiz Attend',
                description: 'User quiz attend panel',
                requiresAuth: true,

            }
        },
    ]
})
