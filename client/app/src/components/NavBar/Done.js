import Training from "../LearningPlan/Training"
import React, { useState, useEffect } from "react"
import Axios from 'axios'
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import "./Done.css"

function Done(){
    const currentUser = useSelector(state => store.getState().user)
    const [trainings, setTrainings] = useState([])

    useEffect(() => {
        getTrainings()
    }, []);    

    const getTrainings = () => {
        Axios.get(`http://localhost:3001/api/personal/${currentUser.id}/true`).then(response => {
            console.log(response.data)
            setTrainings(response.data)
        }).catch(err => console.log(err))
    }

    return (
        <div className="container">
        <h1>Acesta este feedback-ul pe care l-ai oferit!</h1>
            <div className="trainings">
                {trainings.map((item) => {
                return <Training key={item.id} {...item} />
                })}
            </div>
        </div>)
}

export default Done