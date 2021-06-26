export default {
    namespaced: true,
    strict: process.env.NODE_ENV !== 'production',
    state: {
        isLoading: false,
        isActive: {
            modal: false,
            name: ''
        },
        paginate_links: {
            next: '',
            prev: ''
        },
        /** Errors */
        /** If need two errors in single page then declare another error variables with new name */
        commonErrors: [],
    },
    getters: {},
    mutations: {
        /** Set global loader */
        SET_IS_LOADING(state) {
            state.isLoading = !state.isLoading;
        },
        /** Set global modal activator*/
        SET_IS_ACTIVE(state, value) {
            state.isActive.modal = value.modal
            state.isActive.name = value.name
        },
        /** Errors Handling */
        SET_COMMON_ERRORS(state, errors) {
            state.commonErrors = errors
        },
        /** Global datatable paginate links */
        // SET_PAGINATE_LINKS(state, links) {
        //
        //     if(links.next) {
        //         let next = links.next.split('/api')
        //         next = next.length > 1 ? next[1] : next[0]
        //         state.paginate_links.next = next
        //     }else{
        //         state.paginate_links.next = null
        //     }
        //
        //     if(links.prev){
        //         let prev = links.prev.split('/api')
        //         prev = prev.length > 1 ? prev[1] : prev[0]
        //         state.paginate_links.prev = prev
        //     }else{
        //         state.paginate_links.prev = null
        //     }
        //
        //
        //
        // },
    },
    actions: {}
}
