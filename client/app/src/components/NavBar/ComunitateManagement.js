import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import TrainingList from "../LearningPlan/TrainingList"
import { useLocation } from 'react-router-dom'

function ComunitateManagement(){
    const currentUser = useSelector(state => store.getState().user)

    return(
        <div className="container">
            <h1>Planul de învățare {currentUser.comunitate}</h1>
            {/* Link catre comunitate sau Navigate */}
            <TrainingList entitate={currentUser.comunitate}/>
        </div>
    )
}

export default ComunitateManagement