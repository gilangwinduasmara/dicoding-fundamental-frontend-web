import React, {useEffect, useState} from 'react'
import {getCountries} from "../../Services/api";
import './CountrySelector.css'

export default function CountrySelector(props){
    const [countries, setCountries] = useState([{
        name: 'Global'
    }])

    const onCountryChange = (event) => {
        props.onCountryChange(event.target.value)
    }

    useEffect(() => {
        getCountries().then((data) => {
            setCountries([...countries, ...data.countries])
            // console.log(data['countries'])
        })
    }, [])
    return(
        <div className={'country-selector'}>
            <select onChange={onCountryChange}>
                {countries && countries.map((country, index) => {
                    return(
                        <option value={country.name}>{country.name}</option>
                    )
                })}
            </select>
        </div>
    )
}