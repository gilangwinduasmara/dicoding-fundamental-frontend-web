import React, {useState, useEffect} from 'react'
import style from './style.css'
export default function CardStats(props){
    const [showDetail, setDetail] = useState(true)

    useEffect(() => {
        console.log(showDetail)
    }, [showDetail]);

    return(
        <div className={'card-stats'} onMouseEnter={()=>setDetail(true)} onMouseLeave={()=>setDetail(false)}>
            <div className={'card-summary'} style={{color: props.color}}>
                <div className={'card-count'}>{props.count.toString().split('').reverse().map((item,index)=>index%3==0&&index>0?item+'.':item).reverse()}</div>
            </div>
            <div className={'card-footer'} style={{backgroundColor: props.color}}>
                <div className={'card-title'}>
                    {props.title}
                </div>
            </div>
        </div>
    )
}