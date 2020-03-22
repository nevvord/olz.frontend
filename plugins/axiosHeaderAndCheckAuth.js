export default function ({ $axios, app, store }) {
    let token = localStorage.getItem("auth")
    if (token) {
        $axios.onRequest(config => {                   
            config.headers.common['Authorization'] =`Bearer ${token}`
        })
        $axios.get('/auth/user').then(res=> {
            store.state.user = res.data.user
            store.state.auth = true
        })

    }
}