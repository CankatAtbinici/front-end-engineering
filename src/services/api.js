
import axios from "axios";



const linkedlnApi =  axios.create({
baseURL: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cankatbinici",
})

const metaDataApi  = axios.create({
    baseURL : "https://api.collectapi.com/website_info/ss",
    Authorization: "apikey 1zshakB4gagixFsjorIdsi:629cyBQ5LmcCGJte5AWarr",
}) 

export  {linkedlnApi , metaDataApi} ;


