import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

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
        <div>
            <h1>Bine ai venit in formularul de feedback NPS pentru {entitate}!</h1>
            <h2>Pe o scală de la 0 la 10, cât de probabil este că vei recomanda {entitate} ca un context de voluntariat altor persoane?</h2>
            <div>
                <p>0</p>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={scor}
                    onChange={(e) => setScor(e.currentTarget.value)}
                    />
                <p>10</p>
            </div>
            <button type="submit" onClick={handleClick}>OK</button>
        </div>
    )
}

export default NPS