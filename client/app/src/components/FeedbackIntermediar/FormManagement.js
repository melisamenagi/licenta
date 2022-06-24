import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import "../LearningPlan/TrainingFeedback.css"
import Axios from 'axios'

function FormManagement(){
    const location = useLocation()
    const { full_name } = location.state
    let { id } = useParams()

    const [strengths, setStrengths] = useState("")
    const [weaknesses, setWeaknesses] = useState("")
    const [evolutie, setEvolutie] = useState("")
    const [isEligible, setIsEligible] = useState(false)
    const [functie, setFunctie] = useState("")
    const [observatii, setObservatii] = useState("")

    const handleFeedback = () => {
        Axios.post(`http://localhost:3001/api/intermediar/management/${id}`, {
            strengths: strengths,
            weaknesses: weaknesses,
            evolutie: evolutie,
            isEligible: isEligible,
            functie: functie,
            observatii: observatii
          }).then(response => console.log(response))    
            .catch(err => console.log(err))
        alert("Feedback-ul a fost inregistrat")
    }

    function handleCheck() {
        const checkBox = document.getElementById("licitatie");
        // let functieInput = document.getElementById("text");
        if (checkBox.checked === true){
          setIsEligible(true)
        //   functieInput.style.display = "block";
        } else {
           setIsEligible(false)
        //    functieInput.style.display = "none";
        }
      }

    return(
        <div className='container-feedback'>
            <div>
                <img className="img-feedback" src={require("../../assets/feedback.png")}/>
            </div>
            <div className='form-feedback'>
                <h2>Te rugam sa completezi formularul de feedback</h2>
                <h2>{full_name}</h2>
                <label>
                    Care sunt punctele forte?
                    <div>
                        <textarea
                            // type="text"
                            rows="5" cols="50"
                            value={strengths}
                            onChange={(e) => setStrengths(e.currentTarget.value)}
                        />
                    </div>
                </label>
                <label>
                    Care sunt punctele slabe?
                    <div>
                        <textarea
                            type="text"
                            value={weaknesses}
                            onChange={(e) => setWeaknesses(e.currentTarget.value)}
                        />
                    </div>
                </label>
                <label>
                    Care este evolutia sa?
                    <div>
                        <textarea
                            type="text"
                            value={evolutie}
                            onChange={(e) => setEvolutie(e.currentTarget.value)}
                        />
                    </div>
                </label>
                <label>
                    Ar trebui sa liciteze?
                    <div>
                        <input type="checkbox" name='licitatie' id="licitatie" onClick={handleCheck}></input>
                    </div>
                </label> 
                {isEligible &&  <div><input
                                    id="functie"
                                    // style={{display:"none"}}
                                    type="text"
                                    placeholder='Ce functie ar trebui sa liciteze?'
                                    value={functie}
                                    onChange={(e) => setFunctie(e.currentTarget.value)}
                        /></div>}
                <label>
                    Alte observatii?
                    <div>
                        <textarea
                            type="text"
                            value={observatii}
                            onChange={(e) => setObservatii(e.currentTarget.value)}
                        />
                    </div>
                </label>
                <button type="submit" className="submitbutton" onClick={handleFeedback}>Ok</button>
            </div>
        </div>
    )
}

export default FormManagement