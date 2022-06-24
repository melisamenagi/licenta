import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import Departament from "./Departament"
import { useNavigate, Link } from 'react-router-dom'
import "./Departamente.css"

function Departamente(){
    const currentUser = useSelector(state => store.getState().user)
    const navigate = useNavigate()
    let departamente = []
    if(currentUser.functie_id === 'O'){
        departamente.push(currentUser.first_department)
        departamente.push(currentUser.second_department)
        departamente.push(currentUser.third_department)    
    }

    if(currentUser.functie_id === 'HR'){
        departamente.push('Public Relations')
        departamente.push('Business Development')
        departamente.push('Creative')
        departamente.push('Marketing')
        departamente.push('Human Resources')
    }

    const handleClick = () => {
        navigate(`/dashboard/departamente/${currentUser.first_department}`)
    }

    return(
        <div className="container">
            <h1>Selecteaza un departament</h1>
            <div className="departamente-container">
                {departamente.map((item) => {
                // return <Departament key={departamente.indexOf(item)} name={item} />
                // return <button key={departamente.indexOf(item)} onClick={handleClick}>{item}</button>
                return <div className="departamente-item"><Link to={`/dashboard/departamente/${item}`} key={departamente.indexOf(item)} style={{ textDecoration: 'none' }} className='departamente-link' state={{denumire: item}}>{item}</Link></div>
                })}
            </div>
        </div>
    )
}

export default Departamente