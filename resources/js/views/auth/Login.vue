<template>
    <v-layout align-center justify-center>
        <fpl :isLoading="isLoading"></fpl>
        <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                    <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-form>
                        <v-text-field
                            :value="loginInfo.email"
                            @input="SET_LOGIN_EMAIL"
                            prepend-icon="person"
                            label="Login"
                            type="text"
                        ></v-text-field>
                        <v-text-field
                            :value="loginInfo.password"
                            @input="SET_LOGIN_PASSWORD"
                            prepend-icon="lock"
                            label="Password"
                            type="password"
                        ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="login" :disabled="!validToLogin">Login</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name: 'Login',
    data: () => ({
        //
    }),
    computed: {
        ...mapState('__helpers', [
            'isLoading',
            'commonErrors'
        ]),
        ...mapState('authentication', [
            'token',
            'loginInfo',
        ]),
        ...mapGetters('authentication', [
            'validToLogin',
        ]),
    },
    methods: {
        ...mapMutations('authentication', [
            'SET_LOGIN_EMAIL',
            'SET_LOGIN_PASSWORD',
        ]),
        ...mapActions('authentication', [
            'login',
        ]),
    }

}
</script>
