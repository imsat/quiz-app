<template>
    <v-layout align-center justify-center>
        <fpl :isLoading="isLoading"></fpl>
<!--        <v-flex xs12 sm8 md4>-->
            <v-row dense>
                <v-col cols="4">
                    <v-card
                        :href="'/quizzes'"
                        color="#385F73"
                        dark
                    >
                        <v-card-title class="text-h5">
                            Quiz
                        </v-card-title>

                        <v-card-actions>
                            <v-btn text>
                                Total Quizzes: 10
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
<!--        </v-flex>-->
    </v-layout>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: "Dashboard.vue",
    computed: {
        ...mapState('__helpers', [
            'isLoading',
        ]),
    }
}
</script>

<style scoped>

</style>
