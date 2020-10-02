import './App.css'
import Home from "./Pages/Home";
import CountrySelector from './Components/CountrySelector/CountrySelector'
import CardStats from './Components/CardStats/CardStats'
import { getStats } from './Services/api.js';

const main = () => {
    const home = document.querySelector('home-page')
    const countrySelector = document.querySelector('country-selector')
    const statCards = document.querySelector('card-stats')
    const onChange = (e) => {
        home.country = e.target.value
        getData(e.target.value)
    }
    const getData = async (country) =>{
        if(country == 'Global'){
            country = ''
        }
        const data = await getStats(country)
        statCards.stat = data
        
    }
    countrySelector.changeEvent = onChange
    getData()
}

document.addEventListener("DOMContentLoaded", main);