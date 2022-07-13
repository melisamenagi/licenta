import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import "./TrainingFeedback.css"
import Axios from 'axios'
import { store } from "../../features/store"
import { useSelector } from "react-redux"

function TrainingFeedback(){
    const currentUser = useSelector(state => store.getState().user)
    const location = useLocation()
    const {denumire, speaker} = location.state
    let { entitate, id } = useParams()

    const [tema, setTema] = useState("")
    const [speakerFb, setSpeakerFb] = useState("")
    const [raport, setRaport] = useState(0)

    const handleFeedback = () => {
        console.log("click")
        console.log(tema, speakerFb, raport)
        // Axios.post(`http://localhost:3001/api/training/${entitate}/${id}`, {
        //     tema: tema,
        //     speaker: speakerFb,
        //     raport: raport,
        //   }).then(response => console.log(response))    
        //     .catch(err => console.log(err))
        // alert("Multumim de feedback!")
        Axios.post(`http://localhost:3001/api/personal/${currentUser.id}/feedback/${denumire}`, {
            tema: tema,
            speaker: speakerFb,
            raport: raport,
          }).then(response => console.log(response))    
            .catch(err => console.log(err))
        alert("Multumim de feedback!")
    }

    return(
        <div className='container-feedback'>
            <div className="img-feedback">
                <img src={require("../../assets/Feedback wanted.png")}/>
            </div>
            <div className='form-feedback'>
                <p>Tema</p>
                <h1>{denumire}</h1>
                <p>Speaker</p>
                <h2>{speaker}</h2>
                <div className='form'>
                    <label for='tema'>Cum ți s-a părut tema?</label>
                    <div>
                        <textarea
                            // type="text"
                            value={tema}
                            name='tema'
                            onChange={(e) => setTema(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <div className='form'>
                    <label for='speaker'>Cum a fost interacțiunea cu speakerul?</label>
                        <div>
                            <textarea
                                // type="textarea"
                                value={speakerFb}
                                name='speaker'
                                onChange={(e) => setSpeakerFb(e.currentTarget.value)}
                            />
                        </div>
                </div>
                <div className='form'>
                    <label for='raportInput'>Cum ai nota raportul dintre partea teoretică și cea practică?</label>
                        <div className='raport'>
                            <p>Teorie</p>
                            <input
                                type="range"
                                id="raport"
                                min="1"
                                max="5"
                                value={raport}
                                name='raportInput'
                                onChange={(e) => setRaport(e.currentTarget.value)}
                            />
                            <p>Practică</p>
                        </div>
                </div>
                <button type="submit" className="submitbutton" onClick={handleFeedback}>OK</button>
            </div>
        </div>
    )
}

export default TrainingFeedback