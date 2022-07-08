import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

function EES() {
    let { entitate, id } = useParams()

    const handleClick = () => {
        console.log(id)
        let a1 = parseInt(document.querySelector('input[name="question1"]:checked').value)
        let a2 = parseInt(document.querySelector('input[name="question2"]:checked').value)
        let a3 = parseInt(document.querySelector('input[name="question3"]:checked').value)
        let a4 = parseInt(document.querySelector('input[name="question4"]:checked').value)
        let a5 = parseInt(document.querySelector('input[name="question5"]:checked').value)
        const scor = a1 + a2 + a3 + a4 + a5 
        Axios.post(`http://localhost:3001/api/indicator/feedback/${id}`, {
            scor: scor
          }).then(response => console.log(response))    
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Bine ai venit in formularul de feedback Employee Engagement Score pentru {entitate}!</h1>
                <h2>1.	Te simți mândru/ mândră să fii membru în organizație?</h2>
                    <input
                        type="radio"
                        name="question1"
                        value="1"
                        />
                    <label>Da</label>
                    <input
                        type="radio"
                        name="question1"
                        value="0"
                        />
                    <label>Nu</label>
                <h2>2.	Când a fost ultima dată când ai fost apreciat pentru că ai făcut o treabă bună?</h2>
                    <input
                        type="radio"
                        name="question2"
                        value="3"
                        />
                    <label>Ultima saptamana</label>
                    <input
                        type="radio"
                        name="question2"
                        value="2"
                        />
                    <label>Ultima luna</label>
                    <input
                        type="radio"
                        name="question2"
                        value="1"
                        />
                    <label>Ultimul trimestru</label>
                    <input
                        type="radio"
                        name="question2"
                        value="0"
                        />
                    <label>Niciodata</label>
                <h2>3.	Managerul meu este un exemplu pentru membrii organizației</h2>
                    <input
                        type="radio"
                        name="question3"
                        value="2"
                        />
                    <label>Da</label>
                    <input
                        type="radio"
                        name="question3"
                        value="1"
                        />
                    <label>Intr-o oarecare masura</label>
                    <input
                        type="radio"
                        name="question3"
                        value="0"
                        />
                    <label>Nu</label>
                <h2>4.	Majoritatea sistemelor și proceselor susțin dezvoltarea și activitatea noastră</h2>
                    <input
                        type="radio"
                        name="question4"
                        value="2"
                        />
                    <label>Da</label>
                    <input
                        type="radio"
                        name="question4"
                        value="1"
                        />
                    <label>Intr-o oarecare masura</label>
                    <input
                        type="radio"
                        name="question4"
                        value="0"
                        />
                    <label>Nu</label>
                <h2>5.	Organizația este un context excelent să fac o contribuție pentru dezvoltarea mea personală</h2>
                    <input
                        type="radio"
                        name="question5"
                        value="2"
                        />
                    <label>Da</label>
                    <input
                        type="radio"
                        name="question5"
                        value="1"
                        />
                    <label>Intr-o oarecare masura</label>
                    <input
                        type="radio"
                        name="question5"
                        value="0"
                        />
                    <label>Nu</label>

                <button type="submit" onClick={handleClick}>OK</button>
        </div>
    )
}

export default EES