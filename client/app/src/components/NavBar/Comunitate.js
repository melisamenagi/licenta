import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import TrainingList from "../LearningPlan/TrainingList"
import { useLocation} from 'react-router-dom'
import "./Done.css"

function Comunitate(){
    const currentUser = useSelector(state => store.getState().user)
    const location = useLocation()
    const { denumire } = location.state

    return(
        <div className="container">
            <h1>Planul de învățare {denumire}</h1>
            <TrainingList entitate={denumire}/>
        </div>
    )
}

export default Comunitate