import { Link, Navigate, useLinkClickHandler } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./Training.css"
import { store } from "../../features/store"
import { useSelector } from "react-redux"

function Training({id,entitate, denumire, data, speaker, done}){
    const navigate = useNavigate()
    const currentUser = useSelector(state => store.getState().user)

    const handleClickFeedback = () => {
        navigate(`/dashboard/training/${entitate}/${id}`, {
            denumire: denumire,
            speaker: speaker
        })
    }

    return(
        <article className='training'>
            <p>tema</p>
            <h1>{denumire}</h1>
            <p>data</p>
            <h2>{data}</h2>
            <p>speaker</p>
            <h2>{speaker}</h2>
            {currentUser.functie_id === 'O' && !done && <Link to={`/dashboard/training/${entitate}/${id}`} className="feedback" style={{ textDecoration: 'none' }} state={{denumire: denumire, speaker: speaker, data: data}}>Feedback</Link>}
            {currentUser.functie_id === 'O' && done && <Link to={`/dashboard/training/${entitate}/${id}/feedback`} className="feedback" style={{ textDecoration: 'none' }} state={{denumire: denumire, speaker: speaker, data: data}}>Feedback</Link>}
            {currentUser.functie_id === 'C' || currentUser.functie_id === 'D'||currentUser.functie_id === 'HR' ? <Link to={`/dashboard/training/management/${entitate}/${id}`} className="feedback" style={{ textDecoration: 'none' }} state={{denumire: denumire, data: data, speaker: speaker}}>Feedback</Link>: <></>}
            {/* <button onClick={handleClickFeedback}>Feedback</button> */}
        </article>
    )
}

export default Training