import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import "./EES.css"

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
        <div className='container-feedback'>
            <div className="img-feedback">
                <img src={require("../../assets/Feedback wanted.png")}/>
            </div>
            <div className='form-ees'>
                <h2>Te rugăm să completezi Employee 
                    Engagement Score pentru {entitate}!</h2>
                    <p>Te simți mândru/ mândră să fii membru în organizație?</p>
                        <div className='options'>
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
                        </div>
                    <p>Când a fost ultima dată când ai fost apreciat pentru că ai făcut o treabă bună?</p>
                        <div className='options'>
                            <input
                                type="radio"
                                name="question2"
                                value="3"
                                />
                            <label>Ultima săptămână</label>
                            <input
                                type="radio"
                                name="question2"
                                value="2"
                                />
                            <label>Ultima lună</label>
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
                            <label>Niciodată</label>
                        </div>
                    <p>Managerul meu este un exemplu pentru membrii organizației</p>
                        <div className='options'>
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
                            <label>Într-o oarecare măsură</label>
                            <input
                                type="radio"
                                name="question3"
                                value="0"
                                />
                            <label>Nu</label>
                        </div>
                    <p>Majoritatea sistemelor și proceselor susțin dezvoltarea și activitatea noastră</p>
                        <div className='options'>
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
                            <label>Într-o oarecare măsură</label>
                            <input
                                type="radio"
                                name="question4"
                                value="0"
                                />
                            <label>Nu</label>
                        </div>
                    <p>Organizația este un context excelent să fac o contribuție pentru dezvoltarea mea personală</p>
                        <div className='options'>
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
                            <label>Într-o oarecare măsură</label>
                            <input
                                type="radio"
                                name="question5"
                                value="0"
                                />
                            <label>Nu</label>
                        </div>
                <button type="submit" className='submitbutton' onClick={handleClick}>OK</button>
            </div>
        </div>
    )
}

export default EES