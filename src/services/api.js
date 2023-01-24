import axios from "axios";


const apiCodeBurguer = axios.create({
    baseURL: 'http://localhost:5000'
})

export default apiCodeBurguer