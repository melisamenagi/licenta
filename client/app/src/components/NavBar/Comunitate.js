import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import TrainingList from "../LearningPlan/TrainingList"
import { useLocation } from 'react-router-dom'
import "./Done.css"

function Comunitate(){
    const currentUser = useSelector(state => store.getState().user)

    return(
        <div className="container">
            <h1>Bine ai venit in {currentUser.comunitate}!</h1>
            <TrainingList entitate={currentUser.comunitate}/>
        </div>
    )
}

export default Comunitate