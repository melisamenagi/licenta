import React, { useState, useEffect } from "react"
import Axios from 'axios'
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import "../LearningPlan/TrainingList.css"
import Member from "./Member"

function FeedbackIntermediar(){
    const currentUser = useSelector(state => store.getState().user)
    const [members, setMembers] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const [denumire, setDenumire] = useState("")
    const [data, setData] = useState("")
    const [speaker, setSpeaker] = useState("")

    useEffect(() => {
        getMembers()
    }, [])

    const getMembers = () => {
        if(currentUser.functie_id === 'C') {
            Axios.get(`http://localhost:3001/api/intermediar/comunitate/${currentUser.comunitate}`).then(response => {
                setMembers(response.data)
                console.log(response.data)
            }).catch(err => console.log(err))    
        }
        else if(currentUser.functie_id === 'D') {
            Axios.get(`http://localhost:3001/api/intermediar/departament/${currentUser.first_department}`).then(response => {
                setMembers(response.data)
                console.log(response.data)
            }).catch(err => console.log(err))    
        }
    }

    return(
        <div>
            <h1>Bun venit in feedback-ul intermediar!</h1>
            <div className="trainings">
                {members.map((item) => {
                return <Member key={item.id} {...item} />
                })}
            </div>

        </div>
)
}

export default FeedbackIntermediar