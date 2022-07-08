import { Link, Navigate, useLinkClickHandler } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "../LearningPlan/Training.css"
import { store } from "../../features/store"
import { useSelector } from "react-redux"

function Indicator({id,indicator, entitate}){
    const navigate = useNavigate()
    const currentUser = useSelector(state => store.getState().user)

    const handleClick = () => {
        if(indicator === "eNPS") {
            navigate(`/dashboard/indicator/${entitate}/${id}/eNPS`, {
                state: {
                    indicator: indicator
                }
            })    
        } else if(indicator === "EES") {
            navigate(`/dashboard/indicator/${entitate}/${id}/EES`, {
                state: {
                    indicator: indicator
                }
            })    
        } else if(indicator === "ESI") {
            navigate(`/dashboard/indicator/${entitate}/${id}/ESI`, {
                state: {
                    indicator: indicator
                }
            })    
        }
    }

    return(
        <article className='training'>
            <h1>{indicator}</h1>
            <h2>{entitate}</h2>
            <button onClick={handleClick}>Feedback</button>
            {/* {currentUser.functie_id === 'O' && indicator === "eNPS" && <Link to={`/dashboard/indicator/${entitate}/${id}`} className="feedback" style={{ textDecoration: 'none' }} state={{indicator: indicator}}>Feedback</Link>} */}
        </article>
    )
}

export default Indicator