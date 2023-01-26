import axios from "axios";


const apiCodeBurguer = axios.create({
    baseURL: 'http://localhost:5000'
})

apiCodeBurguer.interceptors.request.use(async config => {
    // Pegando o token no localStorage
    const userData = await localStorage.getItem('dataUser')
    const token = userData && JSON.parse(userData).token
    // Colocando o token dentro da config
    config.headers.authorization = `Bearer ${token}`
    return config
  })
  
export default apiCodeBurguer