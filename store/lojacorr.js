export const state = () => ({
    step: 1,
    progress: 33,
    form: {
        name: '',
        email: '',
        phoneWork: '',
        phone: '',
        rg: '',
        oe: '',
        cpf: '',
        bithdate: '',
        accept: false,
        socialName: '',
        cnpj: '',
        quantityMembers: '',
        tipoTributacao: null,
    }
})

export const mutations = {
    nextPage(state, value) {
        state.step = value.step
        state.progress = value.progress 
    },
    goToHome(state, value) {
        state.step = 1,
        state.progress = 33
    },
    saveForm(state, value) {
        state.form = Object.assign(state.form, value)
    }
}