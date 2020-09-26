async function getCountries(){
    console.log('fetch all countries')
    const request = await fetch('https://covid19.mathdro.id/api/countries', {
        method: 'get'
    })
    const response = await request.json()
    return response
}

async function getStats(country){
    const input = country ? `https://covid19.mathdro.id/api/countries/${country}`:'https://covid19.mathdro.id/api/'
    const request = await fetch(input, {
        method: 'get'
    })
    const response = await request.json()
    return response
}

export {
    getCountries,
    getStats
}