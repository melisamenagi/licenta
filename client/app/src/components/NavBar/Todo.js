import Training from "../LearningPlan/Training"
import React, { useState, useEffect } from "react"
import Axios from 'axios'
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import "./Done.css"
import Indicator from "../Indicator/Indicator"

function Todo(){
    const currentUser = useSelector(state => store.getState().user)
    const [trainings, setTrainings] = useState([])
    const [indicators, setIndicators] = useState([])

    useEffect(() => {
        getTrainings()
        getIndicators()
    }, []);  
    
    // useEffect(() => {
    //     getIndicators()
    // }, [])

    const getTrainings = () => {
        Axios.get(`http://localhost:3001/api/personal/${currentUser.id}/false`).then(response => {
            console.log(response.data)
            // let listTrainings = [] 
            // response.data.forEach(element => {
            //     element.forEach(training => listTrainings.push(training))
            // })
            // console.log(listTrainings)
            // setTrainings(listTrainings)
            setTrainings(response.data)
        }).catch(err => console.log(err))
    }

    const getIndicators = () => {
        Axios.get(`http://localhost:3001/api/indicator/${currentUser.id}`).then(response => {
            console.log(response.data)
            setIndicators(response.data)
        }).catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h1>Acesta este feedback-ul pe care trebuie să îl oferi!</h1>
            <div className="trainings">
                {indicators.map((item) => {
                    return <Indicator key={item.id} {...item} />
                })}
                {trainings.map((item) => {
                    return <Training key={item.id} {...item} />
                })}
            </div>
        </div>)
}

export default Todo