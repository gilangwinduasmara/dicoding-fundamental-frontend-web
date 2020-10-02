import {getCountries} from "../../Services/api";
import './CountrySelector.css'

class CountrySelector extends HTMLElement{
    constructor(){
        super()
        this.countries = [{
            name: 'Global'
        }]
    }
    connectedCallback(){
        getCountries().then((data) => {
            this.setCountries([...this.countries, ...data.countries])
        })
    }
    setCountries(countries){
        this.countries = countries
        this.render()
    }

    set changeEvent(event){
        this._changeEvent = event
        this.render()
    }

    get value(){
        return document.querySelector('#country-selector').value
    }

    render(){
        let countryOptions = ""
        this.countries && this.countries.map((country, index) => {
            countryOptions+=`            
                <option value='${country.name}'>${country.name}</option>
            `
        })
        this.innerHTML = `
        <div class='country-selector'>
            <select id='country-selector'>
            ${countryOptions}
            </select>
        </div>
        `    
        document.querySelector('#country-selector').addEventListener("change", this._changeEvent)

    }
}
customElements.define("country-selector", CountrySelector)