/**
 * Module to handle Quizzes
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
        quizzes: [],
        quiz: {},
        quiz_stepper: 1,
    },
    getters: {
    },
    mutations: {
        UPDATE_STEPPER(state, value){
            state.quiz_stepper = value
        },
        /** Set all Quizzes */
        SET_QUIZZES(state, value) {
            state.quizzes = value
        },
        /** Set all Quizzes */
        SET_QUIZ(state, value) {
            state.quiz = value
        }

    },
    actions: {
        /**
         * Get all quizzes
         *
         * @param commit
         * @param state
         * @returns {Promise<Route>}
         */
         getQuizzes({commit, state}) {
            return HTTP().get('/quizzes')
                .then(response => {
                    return commit('SET_QUIZZES', response.data.data)

                })
                .catch(error => {
                    console.log(error)
                })

        },
        /**
         *  Get single quizzes
         *
         * @param commit
         * @param state
         * @param id
         * @returns {*}
         */
         getSingleQuiz({commit, state}, id) {
            return HTTP().get('/quizzes/' + id)
                .then(response => {
                    return commit('SET_QUIZ', response.data)

                })
                .catch(error => {
                    console.log(error)
                })

        },

    }
}
