import axios from "axios"

async function getCountries(){
    const request = await axios.get('https://covid19.mathdro.id/api/countries')
    return request.data
}

async function getStats(country){
    const input = country ? `https://covid19.mathdro.id/api/countries/${country}`:'https://covid19.mathdro.id/api/'
    const request = await axios.get(input)
    return request.data
}

export {
    getCountries,
    getStats
}