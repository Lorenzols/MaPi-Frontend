export const state = () => ({
    status: '',
    id: ''
})

export const mutations = {
    signup(state, data) {
        state.status = true
        state.id = data.user
    },
    logut(state) {
        state.status = false
    }
}