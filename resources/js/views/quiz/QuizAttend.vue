<template>
    <v-layout align-center justify-center>
        <fpl :isLoading="isLoading"></fpl>
        <v-flex>
            <v-row dense>
                <v-col
                    cols="12"
                >
                    <v-card
                        color="teal"
                    >
                        <v-card-title
                            class="text-h5"
                        >

                            {{ quiz.title }}

                            <span class="float-right">{{ countDown }}</span>
                        </v-card-title>

<!--                        <v-stepper v-model="el">-->
                        <v-stepper :value="quiz_stepper" >
                            <v-stepper-header>
                                <v-stepper-step
                                    v-for="n in quiz.total_question"
                                    :key="n"
                                    :complete="n > n+ 1"
                                    :step="n"
                                >
                                    Question {{ n}}
                                </v-stepper-step>

                                <v-divider></v-divider>
                            </v-stepper-header>

                            <v-stepper-items>
                                <v-stepper-content step="1">
                                    <v-card
                                        class="mb-12"
                                        color="grey lighten-1"
                                        height="200px"
                                    ></v-card>

                                    <v-btn
                                        color="primary"
                                        @click="e1 = 2"
                                    >
                                        Continue
                                    </v-btn>

                                    <v-btn text>
                                        Cancel
                                    </v-btn>
                                </v-stepper-content>

                                <v-stepper-content step="2">
                                    <v-card
                                        class="mb-12"
                                        color="grey lighten-1"
                                        height="200px"
                                    ></v-card>

                                    <v-btn
                                        color="primary"
                                        @click="UPDATE_STEPPER(2)"
                                    >
                                        Continue
                                    </v-btn>

                                    <v-btn text>
                                        Cancel
                                    </v-btn>
                                </v-stepper-content>
                                <v-stepper-content step="3">
                                    <v-card
                                        class="mb-12"
                                        color="grey lighten-1"
                                        height="200px"
                                    ></v-card>

                                    <v-btn
                                        color="primary"
                                        @click="UPDATE_STEPPER(3)"
                                    >
                                        Continue
                                    </v-btn>

                                    <v-btn text>
                                        Cancel
                                    </v-btn>
                                </v-stepper-content>

                                <!--                                <v-stepper-content-->
<!--                                    v-for="j in  quiz.total_question"-->
<!--                                    :key="j"-->
<!--                                    :step="j">-->
<!--                                    <v-card-->
<!--                                        class="mb-12"-->
<!--                                        color="grey lighten-1"-->
<!--                                        height="200px"-->
<!--                                    ></v-card>-->

<!--                                    <v-btn-->
<!--                                        color="primary"-->
<!--                                        @click="UPDATE_STEPPER(j)"-->
<!--                                    >-->
<!--                                        Continue-->
<!--                                    </v-btn>-->

<!--                                    <v-btn text>-->
<!--                                        Cancel-->
<!--                                    </v-btn>-->
<!--                                </v-stepper-content>-->

                            </v-stepper-items>
                        </v-stepper>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: "QuizAttend",
    data() {
        return {
            countDown: 30,
            e1: 1
        }
    },
    computed: {
        ...mapState('__helpers', [
            'isLoading',
        ]),
        ...mapState('quiz', [
            'quiz',
            'quiz_stepper',
        ]),
    },
    created() {
        let _this = this
        _this.getSingleQuiz(_this.$route.params.id);
        // _this.countDownTimer()
    },
    methods: {
        ...mapMutations('quiz', [
            'UPDATE_STEPPER',
        ]),
        ...mapActions('quiz', ['getSingleQuiz']),
        // countDownTimer() {
        //     if (this.countDown > 0) {
        //         setTimeout(() => {
        //             this.countDown -= 1
        //             this.countDownTimer()
        //         }, 1000)
        //     }
        // }
    }
}
</script>

<style scoped>

</style>
