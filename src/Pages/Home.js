import React, {Component, useRef, useEffect} from 'react'
import CardStats from "../Components/CardStats/CardStats";
import './style.css'
import {getCountries, getStats} from "../Services/api";
import CountrySelector from "../Components/CountrySelector/CountrySelector";
import virus from '../Assets/Images/virus.png'
export default class Home extends Component{
    constructor() {
        super();
        this.state = {
            coutries: [],
            stats: null
        }
    }
    componentDidMount() {
        this.getData('')
    }

    getData = (country) => {
        if(country == 'Global'){
            country = ''
        }
        getStats(country).then((data) => {
            console.log(data)
            this.setState({stats: data})
        })
    }

    onCountryChange = (country) => {
        console.log(country)
        this.getData(country)
    }

    render() {
        return(
            <div className={'home-container'}>
                <header>
                    <h2 style={{color: '#776d8a'}}>Lawan Covid19</h2>
                    <div>
                        <a href={'#statistik'}>Statistik</a>
                        <a href={'#penularan'}>Penularan</a>
                        <a href={'#pencegahan'}>Pencegahan</a>
                    </div>
                </header>
                <div className={'hero'}>
                    <div style={{width: 400}}>
                        <h1 style={{alignText: 'center', fontSize: 64, lineHeight: 0}}>Covid19</h1>
                        <p>
                            COVID-19 adalah penyakit yang disebabkan oleh virus severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). COVID-19 dapat menyebabkan gangguan sistem pernapasan, mulai dari gejala yang ringan seperti flu, hingga infeksi paru-paru, seperti pneumonia.
                        </p>
                        <button onClick={()=>window.location.href='#statistik'}>Lihat Statistik</button>
                    </div>
                    <div className={'virus-img'}>
                        <img src={virus}/>
                    </div>
                </div>
                <div id={'statistik'}>
                    <div className={'section-title'}>
                        <h2>Statistik</h2>
                        <div className='divider'></div>
                    </div>
                    <CountrySelector onCountryChange={this.onCountryChange}/>
                    {
                        this.state.stats &&
                        <div className={'stat-group'}>
                            <CardStats title={'Positif'} count={this.state.stats.confirmed.value} color={'#ff5f40'}/>
                            <CardStats title={'Sembuh'} count={this.state.stats.recovered.value} color={'#24a19c'}/>
                            <CardStats title={'Menginggal'} count={this.state.stats.deaths.value} color={'#1b262c'}/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}