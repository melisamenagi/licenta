import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import TrainingList from "../LearningPlan/TrainingList"
import { useLocation, useParams } from 'react-router-dom'
import "./Done.css"

function Departament(){
    const currentUser = useSelector(state => store.getState().user)
    const location = useLocation()
    const { denumire } = location.state

    //aici in fct de hr sau officer duce la formularul corect 
    return (
        <div className='container'>
            <h1>Planul de învățare {denumire}</h1>
            {/* <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
              details
            </Link> */}
            <TrainingList entitate={denumire}/>
        </div>
      )
}

export default Departament