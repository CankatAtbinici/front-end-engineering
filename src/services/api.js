
import axios from "axios";


const remoteApi =  axios.create({
    baseURL: "./https://jsonplaceholder.typicode.com/",
})

export default remoteApi;