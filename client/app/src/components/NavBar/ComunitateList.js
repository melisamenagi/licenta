import Navbar from "./Navbar"
import { store } from "../../features/store"
import { useSelector } from "react-redux"
import "./Departamente.css"
import ComunitateManagement from "./ComunitateManagement"
import { useNavigate, Link, useLocation } from 'react-router-dom'

function ComunitateList(){
    let comunitati = []
    comunitati.push('Econosofia')
    comunitati.push('Business Club')
    comunitati.push('Leadership Development')
    comunitati.push('International Affairs')

    // const location = useLocation()
    // const { intermediar } = location.state


    return(
        <div className="container">
            <h1>Selectează o comunitate</h1>
            <div className="departamente-container">
                {comunitati.map((item) => {
                // return <Departament key={departamente.indexOf(item)} name={item} />
                // return <button key={departamente.indexOf(item)} onClick={handleClick}>{item}</button>
                return <div className="departamente-item"><Link to={`/dashboard/comunitati/${item}`} key={comunitati.indexOf(item)} style={{ textDecoration: 'none' }} className='departamente-link' state={{denumire: item}}>{item}</Link></div>
                })}
            </div>
        </div>
    )
}

export default ComunitateList