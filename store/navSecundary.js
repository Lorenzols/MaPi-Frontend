export const state = () => ({
    isNavSecundary: true
})

export const mutations = {
    click(state) {
        state.isNavSecundary = !state.isNavSecundary
    }
}