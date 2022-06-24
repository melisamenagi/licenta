import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import TrainingList from "../LearningPlan/TrainingList"

function ComunitateManagement(){
    const currentUser = useSelector(state => store.getState().user)

    return(
        <>
            <h1>Bine ai venit in {currentUser.comunitate} ca manager!</h1>
            {/* Link catre comunitate sau Navigate */}
            <TrainingList entitate={currentUser.comunitate}/>
        </>
    )
}

export default ComunitateManagement