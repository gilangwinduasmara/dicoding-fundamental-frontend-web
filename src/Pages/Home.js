import CardStats from "../Components/CardStats/CardStats";
import './style.css'
import {getCountries, getStats} from "../Services/api";
import virus from '../Assets/Images/virus.png'
class Home extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback(){
        this.render();
    }

    get stats(){
        return this.data
    }

    render() {
        this.innerHTML=`
            <div class='home-container'>
                <header>
                    <h2 style={{color: '#776d8a'}}>Lawan Covid19</h2>
                </header>
                <div class='hero'>
                    <div style={{width: 400}}>
                        <h1 style={{alignText: 'center', fontSize: 64, lineHeight: 0}}>Covid19</h1>
                        <p>
                            COVID-19 adalah penyakit yang disebabkan oleh <br>virus severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). <br>COVID-19 dapat menyebabkan gangguan sistem pernapasan, <br>mulai dari gejala yang ringan seperti flu, hingga infeksi paru-paru, seperti pneumonia.
                        </p>
                        <button id='lihat-statistik-button'>Lihat Statistik</button>
                    </div>
                    <div class='virus-img'>
                        <img src='${virus}'/>
                    </div>
                </div>
                <div id='statistik'>
                    <div class='section-title'>
                        <h2>Statistik</h2>
                        <div class=divider'></div>
                    </div>
                    <country-selector></country-selector>
                    <card-stats></card-stats>
                </div>
            </div>
        `
    }
}
customElements.define("home-page", Home)
document.getElementById('lihat-statistik-button').onclick = (e) => {window.location.href = '#statistik'}