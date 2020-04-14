export const strict = false;
export const state = () => ({
    user: ''
})

export const mutations = {
    
}

export const getters = {
    getAvatar: state => state.user.avatar
}