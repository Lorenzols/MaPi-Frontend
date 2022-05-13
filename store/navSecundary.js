export const state = () => ({
    isNavSecundary: false
})

export const mutations = {
    click(state) {
        state.isNavSecundary = !state.isNavSecundary
    }
}