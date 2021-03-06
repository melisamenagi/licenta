import Training from "./Training"
import React, { useState, useEffect } from "react"
import Axios from 'axios'
import "./TrainingList.css"
import { store } from "../../features/store"
import { useSelector } from "react-redux"

function TrainingList(props){
    const currentUser = useSelector(state => store.getState().user)
    const [trainings, setTrainings] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [denumire, setDenumire] = useState("")
    const [data, setData] = useState("")
    const [speaker, setSpeaker] = useState("")

    useEffect(() => {
        getTrainings()
    }, [trainings]);    

    const getTrainings = () => {
        Axios.get(`http://localhost:3001/api/training/${props.entitate}`).then(response => {
            setTrainings(response.data)
        }).catch(err => console.log(err))
    }

    const handleAdd = () => {
        setIsClicked(true)
    }

    const handleSubmit = () => {
        Axios.post(`http://localhost:3001/api/training/${props.entitate}`, {
            denumire: denumire,
            data: data,
            speaker: speaker
        }).then(response => {
            console.log(response.data)
        }).catch(err => console.log(err))
        Axios.post(`http://localhost:3001/api/training/${props.entitate}/personal`, {
            denumire: denumire,
            data: data,
            speaker: speaker
        }).then(response => {
            console.log(response.data)
        }).catch(err => console.log(err))
        setIsClicked(false)
    }

    const handleCancel = () => {
        setIsClicked(false)
    }

    return(
        <div className="list">
            {/* <h1>Traininguri</h1> */}
            {(currentUser.functie_id === 'C' || currentUser.functie_id === 'D' || (currentUser.functie_id === 'HR' && props.entitate === 'Human Resources')) && <button id='training-button' onClick={handleAdd}>Adaugă training</button>}
            {isClicked && 
            <div className="training-form">
                    <input
                        type="text"
                        value={denumire}
                        placeholder="Tema training-ului"
                        onChange={(e) => setDenumire(e.currentTarget.value)}
                    />
                    <input
                        type="date"
                        value={data}
                        placeholder="Data"
                        onChange={(e) => setData(e.currentTarget.value)}
                    />
                    <input
                        type="text"
                        value={speaker}
                        placeholder="Speaker-ul invitat"
                        onChange={(e) => setSpeaker(e.currentTarget.value)}
                    />
                <button className="trainingList-button" onClick={handleSubmit}>OK</button>
                <button className="trainingList-button" onClick={handleCancel}>Cancel</button>
            </div>}
            <div className="trainings">
                {trainings.map((item) => {
                return <Training key={item.id} {...item} />
                })}
            </div>
        </div>
    )
}

export default TrainingList