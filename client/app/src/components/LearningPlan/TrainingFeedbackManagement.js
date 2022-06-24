import Axios from "axios"
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "./TrainingFeedbackManagement.css"

function TrainingFeedbackManagement(){
    const location = useLocation()
    const {denumire, data, speaker} = location.state
    let { id } = useParams()

    const [tema, setTema] = useState([])
    const [speakerFb, setSpeakerFb] = useState([])
    const [raport, setRaport] = useState(0)

    useEffect(() => {
        getFeedback()
      }, [])

    const getFeedback = () => {
        Axios.get(`http://localhost:3001/api/training/management/${id}`).then(response => {
            const feedback = response.data
            console.log(response.data)
            let tema = feedback.map(f => f.tema)
            let speakerFb = feedback.map(f => f.speaker)
            let note = feedback.map(f => f.raport)
            let count = 0
            let suma = 0
            note.forEach(element => {
                suma += element
                count++
            });
            let medie = suma/count
            setTema(tema)
            setSpeakerFb(Object.values(speakerFb))
            setRaport(medie)
            console.log(tema,speakerFb,raport, suma, count, medie)
        })
        .catch(err => console.log(err))
    }
    const listTemaFb = tema.map(f =>
    <li key={f.id}>
            {f}
    </li>
);

    return(
        <div className="container">
            <h1>{denumire}</h1>
            <h3>{data}</h3>
            <h2>{speaker}</h2>
            {/* <ul>{listTemaFb}</ul> */}
            <h3>Tema</h3>
            <div className="punct-container">
                {tema.map((item) => {
                return <article className='punct-item'>{item}</article>
                })}
            </div>
            <h3>Speaker</h3>
            <div className="punct-container">
                {speakerFb.map((item) => {
                return <article className='punct-item'>{item}</article>
                })}
            </div>
            <h3>Raport practica/teorie</h3>
            {raport}
        </div>
    )
}

export default TrainingFeedbackManagement