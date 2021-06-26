<template>
    <v-layout align-center justify-center>
        <fpl :isLoading="isLoading"></fpl>
        <v-flex>
            <v-row dense>
                <v-col
                    v-for="(quiz, i) in quizzes"
                    :key="i"
                    cols="4"
                >
                    <v-card
                        color="teal"
                        dark
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                    class="text-h5"
                                    v-text="'Quiz ' + (i + 1)"
                                ></v-card-title>

                                <v-card-subtitle v-text="quiz.title"></v-card-subtitle>

                                <v-card-actions>
                                    <router-link :to="'/quizzes/' + quiz.id">
                                    <v-btn
                                        class="ml-2 mt-5"
                                        outlined
                                        rounded
                                        small
                                    >
                                        START QUIZ
                                    </v-btn>
                                    </router-link>
                                </v-card-actions>
                            </div>

                            <v-avatar
                                class="ma-3"
                                size="125"
                                tile
                            >
                                <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: "Quiz",
    computed: {
        ...mapState('__helpers', [
            'isLoading',
        ]),
        ...mapState('quiz', [
            'quizzes',
        ]),
    },
    created() {
        let _this = this
        _this.getQuizzes();
    },
    methods: {
        ...mapActions('quiz', ['getQuizzes'])
    }
}
</script>

<style scoped>

</style>
