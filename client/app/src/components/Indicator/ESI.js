import { useLocation, useParams } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

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
        <div>
            <h1>Bine ai venit in formularul de feedback Employee Satisfaction Index pentru {entitate}!</h1>
                <h2>1.	Înțeleg cu certitudine obiectivele strategice ale organizației</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q1"
                        />
                    <label>Complet de acord</label>
                <h2>2.	Mă bucur că sunt un membru al echipei</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q2"
                        />
                    <label>Complet de acord</label>
                <h2>3.	Echipa este o inspirație pentru mine ca să dau ce e mai bun</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q3"
                        />
                    <label>Complet de acord</label>
                <h2>4.	Echipa îmi oferă suport oricând am nevoie</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q4"
                        />
                    <label>Complet de acord</label>
                <h2>5.	Am dificultăți în a accesa informații pentru a lua decizii mai bune</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q5"
                        />
                    <label>Complet de acord</label>
                <h2>6.	Dacă apare o problemă, știu la cine pot apela</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q6"
                        />
                    <label>Complet de acord</label>
                <h2>7.	Organizația mă informează despre resursele și instrumentele pentru a îmi realiza activitatea</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q7"
                        />
                    <label>Complet de acord</label>
                <h2>8.	Managerii mă încurajează să îmi depun efortul</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q8"
                        />
                    <label>Complet de acord</label>
                <h2>9.	Simt că sunt răsplătit pentru dedicarea către activitatea mea din organizație</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q9"
                        />
                    <label>Complet de acord</label>
                <h2>10.	Simt că opiniile mele sunt auzite și apreciate de către manageri</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q10"
                        />
                    <label>Complet de acord</label>
                <h2>11.	Experimentez și oportunități de dezvoltare personală pe lângă realizarea anumitor taskuri</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q11"
                        />
                    <label>Complet de acord</label>
                <h2>12.	Echipa de management mă implică în procesul decizional</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q12"
                        />
                    <label>Complet de acord</label>
                <h2>13.	Consider că sunt apreciat de managerul meu</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q13"
                        />
                    <label>Complet de acord</label>
                <h2>14.	Consider că îmi depășesc limitele pentru a îndeplini un task</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q14"
                        />
                    <label>Complet de acord</label>
                <h2>15.	Consider că activitatea mea în organizație face o diferență pozitivă în viața altei persoane</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q15"
                        />
                    <label>Complet de acord</label>
                <h2>16. Consider că echipa de management îmi respectă timpul personal</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q16"
                        />
                    <label>Complet de acord</label>
                <h2>17.	Primesc feedback constructiv din partea managerului</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q17"
                        />
                    <label>Complet de acord</label>
                <h2>18.	Simt că managerul înțelege diferența și balansul dintre viața personală și activitatea în organizație</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q18"
                        />
                    <label>Complet de acord</label>
                <h2>19.	Consider că managerul tratează toți membrii în mod egal</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q19"
                        />
                    <label>Complet de acord</label>
                <h2>20.	Simt că sunt satisfăcut cu activitatea în organizație în general</h2>
                    <label>Complet in dezacord</label>
                        <input
                            type="range"
                            min="1"
                            max="5"
                            id="q20"
                        />
                    <label>Complet de acord</label>s
                <button type="submit" onClick={handleClick}>OK</button>
        </div>
    )
}

export default ESI