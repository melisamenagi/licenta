import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import TrainingList from "../LearningPlan/TrainingList"

function DepartamentManagement(){
    const currentUser = useSelector(state => store.getState().user)

    return(
        <div className="container">
            <h1>Planul de învățare {currentUser.first_department}</h1>
            <TrainingList entitate={currentUser.first_department}/>
        </div>
    )
}

export default DepartamentManagement