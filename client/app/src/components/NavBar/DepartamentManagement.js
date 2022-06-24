import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import TrainingList from "../LearningPlan/TrainingList"

function DepartamentManagement(){
    const currentUser = useSelector(state => store.getState().user)

    return(
        <>
            <h1>Bine ai venit in {currentUser.first_department}!</h1>
            <TrainingList entitate={currentUser.first_department}/>
        </>
    )
}

export default DepartamentManagement