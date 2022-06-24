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
            <div>
                <img className="img-feedback" src={require("../../assets/feedback.png")}/>
            </div>
            <div className='form-feedback'>
                <h1>Te rugam să completezi formularul de feedback</h1>
                <h1>{denumire}</h1>
                <h2>{speaker}</h2>
                <label>
                    Tema propusa
                    <div>
                        <input
                            type="text"
                            value={tema}
                            onChange={(e) => setTema(e.currentTarget.value)}
                        />
                    </div>
                </label>
                <label>
                    Interactiunea cu speakerul
                    <div>
                        <input
                            type="text"
                            value={speakerFb}
                            onChange={(e) => setSpeakerFb(e.currentTarget.value)}
                        />
                    </div>
                </label>
                <label>
                    Raport practica/teorie
                    <div className='raport'>
                        <p>Teorie</p>
                        <input
                            type="range"
                            id="raport"
                            min="1"
                            max="5"
                            value={raport}
                            onChange={(e) => setRaport(e.currentTarget.value)}
                        />
                        <p>Practica</p>
                    </div>
                </label>
                <button type="submit" className="submitbutton" onClick={handleFeedback}>Ok</button>
            </div>
        </div>
    )
}

export default TrainingFeedback