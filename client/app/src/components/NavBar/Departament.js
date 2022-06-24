import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import TrainingList from "../LearningPlan/TrainingList"
import { useLocation, useParams } from 'react-router-dom'

function Departament(){
    const currentUser = useSelector(state => store.getState().user)
    const location = useLocation()
    const { denumire } = location.state

    //aici in fct de hr sau officer duce la formularul corect 
    return (
        <article className='departament'>
          <div>
            <h1>{denumire}</h1>
            {/* <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
              details
            </Link> */}
            <TrainingList entitate={denumire}/>
          </div>
        </article>
      )
}

export default Departament