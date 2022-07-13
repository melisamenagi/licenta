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
        <div className="container-management">
            <p>Tema</p>
            <h1>{denumire}</h1>
            <p>Data</p>
            <h2>{data}</h2>
            <p>Speaker</p>
            <h2>{speaker}</h2>
            <p>Cum ți s-a părut tema?</p>
            <div className="punct-container">
                {tema.map((item) => {
                return <article className='punct-item'>{item}</article>
                })}
            </div>
            <p>Cum a fost interacțiunea cu speakerul?</p>
            <div className="punct-container">
                {speakerFb.map((item) => {
                return <article className='punct-item'>{item}</article>
                })}
            </div>
            <p>Cum ai nota raportul dintre  partea teoretică și cea practică?</p>
            <h1>{raport}</h1>
        </div>
    )
}

export default TrainingFeedbackManagement