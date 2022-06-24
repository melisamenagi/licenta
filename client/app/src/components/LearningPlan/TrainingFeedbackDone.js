import Axios from "axios"
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "./TrainingFeedbackManagement"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import "./TrainingFeedbackDone.css"

function TrainingFeedbackDone(){
    const currentUser = useSelector(state => store.getState().user)
    const location = useLocation()
    const {denumire, data, speaker} = location.state

    const [tema, setTema] = useState([])
    const [speakerFb, setSpeakerFb] = useState([])
    const [raport, setRaport] = useState(0)

    const [editFeedback, setEditFeedback] = useState(false)

    useEffect(() => {
        getFeedback()
      }, [])

    const getFeedback = () => {
        Axios.get(`http://localhost:3001/api/personal/${currentUser.id}/feedback/${denumire}`).then(response => {
            const feedback = response.data
            console.log(response.data)
            setTema(feedback.tema)
            setSpeakerFb(feedback.speaker_feedback)
            setRaport(feedback.raport)
        })
        .catch(err => console.log(err))
    }

    const handleSubmit = () => {
        Axios.patch(`http://localhost:3001/api/personal/${currentUser.id}/feedback/${denumire}`, {
            tema: tema,
            speakerFb: speakerFb,
            raport: raport
          }).then(response => {
              console.log(response.data)
            }).catch(err => console.log(err))
        alert("Feedback updated")
        setEditFeedback(false)
    }

    const handleCancel = () => {
        setEditFeedback(false)
    }

    return(
        <div className="done-container">
            <div className="done-info-container">
                <h1>{denumire}</h1>
                <h3>{data}</h3>
                <h2>{speaker}</h2>
                <h3>Tema</h3>
                <p>{tema}</p>
                <h3>Speaker</h3>
                <p>{speakerFb}</p>
                <h3>Raport practica/teorie</h3>
                <p>{raport}</p>
                <button onClick={() => setEditFeedback(true)} className='submit-button'>Edit feedback</button>
            </div>
            {editFeedback && 
            <div className="done-edit-container">
                <input type="text" placeholder='Tema' onChange={(e) => setTema(e.currentTarget.value)}/>
                <input type="text" placeholder='Speaker' onChange={(e) => setSpeakerFb(e.currentTarget.value)}/>
                <input
                        type="range"
                        id="raport"
                        min="1"
                        max="5"
                        onChange={(e) => setRaport(e.currentTarget.value)}
                />
                <div className="done-button-container">
                    <button onClick={handleSubmit} className='submitbutton'>Submit</button>
                    <button onClick={handleCancel} className='submitbutton'>Cancel</button>
                </div>
            </div>}
        </div>
    )
}

export default TrainingFeedbackDone