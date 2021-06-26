<template>
    <v-app>
        <v-app-bar app v-if="token"
                   absolute
                   color="primary accent-4"
                   darkabsolute
                   dark>
            <v-toolbar-title> <router-link to="/dashboard" class="white--text"  style="text-decoration: none;">Quiz App</router-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="mr-2">
                {{user.name}}
            </v-btn>
            <v-btn @click="logout" class="white--text" color="purple darken-2">
                Logout
            </v-btn>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <!--        <v-footer app>-->
        <!--            &lt;!&ndash; &ndash;&gt;-->
        <!--        </v-footer>-->
    </v-app>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
    name: 'App',
    data() {
        return {
            //
        }
    },
    computed: {
        ...mapState('__helpers', [
            'isLoading',
            'commonErrors'
        ]),
        ...mapState('authentication', [
            'token',
            'user',
        ]),
    },
    methods: {
        ...mapActions('authentication', [
            'logout',
        ]),
    }

}
</script>
