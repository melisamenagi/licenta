import { Link, Navigate, useLinkClickHandler } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./Member.css"
// import "../LearningPlan/Training.css"
import { store } from "../../features/store"
import { useSelector } from "react-redux"

function Member({id,full_name, proiect, first_department, second_department, third_department}){
    const navigate = useNavigate()
    const currentUser = useSelector(state => store.getState().user)

    // const handleClickFeedback = () => {
    //     navigate(`/dashboard/training/${entitate}/${id}`, {
    //         denumire: denumire,
    //         speaker: speaker
    //     })
    // }

    return(
        <article className='member'>
            <h1>{full_name}</h1>
            {/* <h3>{proiect}</h3> */}
            <h2>{proiect}</h2>
            <div className='member-departamente'>
                <p>{first_department}</p>
                <p>{second_department}</p>
                <p>{third_department}</p>
            </div>
            {currentUser.functie_id === 'C' || currentUser.functie_id === 'D'||currentUser.functie_id === 'HR' ? <Link to={`/dashboard/intermediar/management/${id}`} className="feedback" style={{ textDecoration: 'none' }} state={{full_name: full_name}}>Feedback</Link>: <></>}
        </article>
    )
}

export default Member