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
                <p>Tema</p>
                <h1>{denumire}</h1>
                <p>Data</p>
                <h2>{data}</h2>
                <p>Speaker</p>
                <h2>{speaker}</h2>
                <p>Cum ți s-a părut tema?</p>
                <h3>{tema}</h3>
                <p>Cum a fost interacțiunea cu speakerul?</p>
                <h3>{speakerFb}</h3>
                <p>Cum ai nota raportul dintre  partea teoretică și cea practică?</p>
                <h3>{raport}</h3>
                <button onClick={() => setEditFeedback(true)} className='submitbutton'>Edit feedback</button>
            </div>
            {editFeedback && 
            <div className="done-edit-container">
                <p>Cum ți s-a părut tema?</p>
                <textarea onChange={(e) => setTema(e.currentTarget.value)}/>
                <p>Cum a fost interacțiunea cu speakerul?</p>
                <textarea onChange={(e) => setSpeakerFb(e.currentTarget.value)}/>
                <p>Cum ai nota raportul dintre  partea teoretică și cea practică?</p>
                <div className='raport'>
                            <p>Teorie</p>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                value={raport}
                                name='raportInput'
                                onChange={(e) => setRaport(e.currentTarget.value)}
                            />
                            <p>Practică</p>
                        </div>

                {/* <input
                        type="range"
                        id="raport"
                        min="1"
                        max="5"
                        onChange={(e) => setRaport(e.currentTarget.value)}
                /> */}
                <div className="done-button-container">
                    <button onClick={handleSubmit} className='submitbutton'>Submit</button>
                    <button onClick={handleCancel} className='submitbutton'>Cancel</button>
                </div>
            </div>}
        </div>
    )
}

export default TrainingFeedbackDone