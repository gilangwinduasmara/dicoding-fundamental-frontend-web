import style from './style.css'

class CardStats extends HTMLElement{
    constructor(){
        super()
        this.props = {}
    }
    connectedCallback(){
        this.stats = {
            confirmed: {
                value: 0
            },
            recovered: {
                value: 0
            },
            deaths: {
                value: 0
            },
        }
        this.render()
    }

    set stat(stat){
        this.stats = stat
        this.render()
    }

    render(){
        this.innerHTML=`
        <div class='stat-group'>
            <div class='card-stats'>
                <div class='card-summary' style={{color: props.color}}>
                    <div class='card-count'>${this.stats.confirmed.value.toString().split('').reverse().map((item,index)=>index%3==0&&index>0?item+'.':item).reverse().join().replaceAll(",","")}</div>
                </div>
                <div class='card-footer' style="background-color: #ff5f40"}>
                    <div class='card-title'>
                        Confirmed
                    </div>
                </div>
            </div>
            <div class='card-stats'>
                <div class='card-summary' style={{color: props.color}}>
                <div class='card-count'>${this.stats.recovered.value.toString().split('').reverse().map((item,index)=>index%3==0&&index>0?item+'.':item).reverse().join().replaceAll(",","")}</div>
                </div>
                <div class='card-footer' style="background-color: #24a19c"}>
                    <div class='card-title'>
                    Recovered
                    </div>
                </div>
            </div>
            <div class='card-stats'>
                <div class='card-summary' style={{color: props.color}}>
                <div class='card-count'>${this.stats.deaths.value.toString().split('').reverse().map((item,index)=>index%3==0&&index>0?item+'.':item).reverse().join().replaceAll(",","")}</div>
                </div>
                <div class='card-footer' style="background-color: #1b262c"}>
                    <div class='card-title'>
                        Deaths
                    </div>
                </div>
            </div>
        </div>        
        `
    }

}

customElements.define("card-stats", CardStats)