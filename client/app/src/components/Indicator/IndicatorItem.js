import { Link, Navigate, useLinkClickHandler } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import Axios from 'axios'
import { useEffect, useState } from 'react'

function IndicatorItem({entitate}){
    const [NPS, setNPS] = useState(0)

    useEffect(() => {
        getNPS()
    }, [])

    const getNPS = () => {
        Axios.get(`http://localhost:3001/api/indicator/management/${entitate}/eNPS`).then(response => {
            const feedback = response.data
            console.log(entitate)
            console.log(response.data)
            let scoruri = feedback.map(f => f.scor)
            let count = 0
            let promoters = 0
            let detractors = 0
            scoruri.forEach(element => {
                if(element >= 9) {
                    promoters++
                } else if(element <=6) {
                    detractors++
                }
                count++
            });
            let procent = (promoters/count * 100) - (detractors/count * 100)
            setNPS(procent.toFixed(1))
            // console.log(tema,speakerFb,raport, suma, count, medie)
        })
        .catch(err => console.log(err))    
    }

    return(
        <article>
            <h1>{entitate}</h1>
            <h2>{NPS}</h2>
        </article>
    )
}

export default IndicatorItem