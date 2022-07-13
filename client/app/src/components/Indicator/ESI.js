import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import "./ESI.css"

function ESI() {
    let { entitate, id } = useParams()

    const handleClick = () => {
        console.log(id)
        let scor = 0;
        for(let i=1;i<=20;i++) {
            scor += parseInt(document.getElementById("q" + i).value)
        }
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
            <div className='form-esi'>
                <h2>Te rugăm să completezi Employee Satisfaction Index pentru {entitate}!</h2>
                    <p>Înțeleg cu certitudine obiectivele strategice ale organizației</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q1"
                            />
                        <label>Complet de acord</label>
                    <p>Mă bucur că sunt un membru al echipei</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q2"
                            />
                        <label>Complet de acord</label>
                    <p>Echipa este o inspirație pentru mine ca să dau ce e mai bun</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q3"
                            />
                        <label>Complet de acord</label>
                    <p>Echipa îmi oferă suport oricând am nevoie</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q4"
                            />
                        <label>Complet de acord</label>
                    <p>Am dificultăți în a accesa informații pentru a lua decizii mai bune</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q5"
                            />
                        <label>Complet de acord</label>
                    <p>Dacă apare o problemă, știu la cine pot apela</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q6"
                            />
                        <label>Complet de acord</label>
                    <p>Organizația mă informează despre resursele și instrumentele pentru a îmi realiza activitatea</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q7"
                            />
                        <label>Complet de acord</label>
                    <p>Managerii mă încurajează să îmi depun efortul</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q8"
                            />
                        <label>Complet de acord</label>
                    <p>Simt că sunt răsplătit pentru dedicarea către activitatea mea din organizație</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q9"
                            />
                        <label>Complet de acord</label>
                    <p>Simt că opiniile mele sunt auzite și apreciate de către manageri</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q10"
                            />
                        <label>Complet de acord</label>
                    <p>Experimentez și oportunități de dezvoltare personală pe lângă realizarea anumitor taskuri</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q11"
                            />
                        <label>Complet de acord</label>
                    <p>Echipa de management mă implică în procesul decizional</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q12"
                            />
                        <label>Complet de acord</label>
                    <p>Consider că sunt apreciat de managerul meu</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q13"
                            />
                        <label>Complet de acord</label>
                    <p>Consider că îmi depășesc limitele pentru a îndeplini un task</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q14"
                            />
                        <label>Complet de acord</label>
                    <p>Consider că activitatea mea în organizație face o diferență pozitivă în viața altei persoane</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q15"
                            />
                        <label>Complet de acord</label>
                    <p>Consider că echipa de management îmi respectă timpul personal</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q16"
                            />
                        <label>Complet de acord</label>
                    <p>Primesc feedback constructiv din partea managerului</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q17"
                            />
                        <label>Complet de acord</label>
                    <p>Simt că managerul înțelege diferența și balansul dintre viața personală și activitatea în organizație</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q18"
                            />
                        <label>Complet de acord</label>
                    <p>Consider că managerul tratează toți membrii în mod egal</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q19"
                            />
                        <label>Complet de acord</label>
                    <p>Simt că sunt satisfăcut cu activitatea în organizație în general</p>
                        <label>Complet in dezacord</label>
                            <input
                                type="range"
                                min="1"
                                max="5"
                                id="q20"
                            />
                        <label>Complet de acord</label>
                    <button type="submit" className='buttonESI' onClick={handleClick}>OK</button>
            </div>
        </div>
    )
}

export default ESI