import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import "./NPS.css"

function NPS() {
    const location = useLocation()
    const {indicator} = location.state
    let { entitate, id } = useParams()
    const [scor, setScor] = useState(0)

    const handleClick = () => {
        console.log(id)
        console.log(scor)
        Axios.post(`http://localhost:3001/api/indicator/feedback/${id}`, {
            scor: scor
          }).then(response => console.log(response))    
            .catch(err => console.log(err))
    }

    return(
        <div className='container-feedback'>
            <div className="img-feedback">
                <img src={require("../../assets/Feedback wanted.png")}/>
            </div>
            <div className='form-nps'>
                <h2>Te rugăm să completezi formularul employee Net Promoter Score pentru {entitate}!</h2>
                <h3>Pe o scală de la 0 la 10, cât de probabil este că vei recomanda {entitate} ca un context de voluntariat altor persoane?</h3>
                <div className='raport-nps'>
                    <p>0</p>
                    <input
                        type="range"
                        id='raport'
                        min="0"
                        max="10"
                        value={scor}
                        onChange={(e) => setScor(e.currentTarget.value)}
                        />
                    <p>10</p>
                </div>
                <button type="submit" className='submitbutton' onClick={handleClick}>OK</button>
            </div>
        </div>
    )
}

export default NPS