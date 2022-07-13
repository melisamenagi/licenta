import React from "react"
import { Link } from 'react-router-dom'
import { store } from "../../features/store"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import "./Profil.css"
import { startFeedbackIntermediar } from "../../features/sessionSlice"
import Axios from 'axios'

function Profil(){
    const currentUser = useSelector(state => store.getState().user)
    const isLoggedIn = useSelector(state => store.getState().isLoggedIn)
    console.log(currentUser)
    const dispatch = useDispatch();
    const [entitate, setEntitate] = useState("")
    const [isNPS, setIsNPS] = useState(false)
    const [isNPSVisible, setIsNPSVisible] =useState(false)
    const [NPS, setNPS] = useState(0)

    useEffect(() => {
        if(currentUser.functie_id !== 'O') {
            if(currentUser.functie_id === 'C') {
                setEntitate(currentUser.comunitate)
            } else if(currentUser.functie_id === 'D') {
                setEntitate(currentUser.first_department)
            } else {
                setEntitate("VIP")
            }
        }
    }, [])

    const handleClickHR = () => {
        // dispatch(startFeedbackIntermediar())
        Axios.post(`http://localhost:3001/api/indicator/${entitate}`, {
            indicator: "eNPS"
        }).then(response => {
            console.log(response.data)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickLaunch = () => {
        Axios.post(`http://localhost:3001/api/indicator/${entitate}`, {
            indicator: "eNPS"
        }).then(response => {
            console.log(response.data)
            setIsNPSVisible(true)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickEnd = () => {
        Axios.patch("http://localhost:3001/api/indicator/Human Resources/eNPS").then(response => {
            console.log(response.data)
            setIsNPSVisible(false)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickView = () => {
        Axios.get(`http://localhost:3001/api/indicator/management/${entitate}/eNPS`).then(response => {
            const feedback = response.data
            console.log(response.data)
            let scoruri = feedback.map(f => f.scor)
            let count = 0
            let promoters = 0
            let detractors = 0
            scoruri.forEach(element => {
                if(element >= 9) {
                    promoters++
                } else if(element <=6) {
                    detractors++
                }
                count++
            });
            let procent = (promoters/count * 100) - (detractors/count * 100)
            setIsNPS(true)
            setNPS(procent.toFixed(1))
            // console.log(tema,speakerFb,raport, suma, count, medie)
        })
        .catch(err => console.log(err))
    }

    return(
        <>
            <div className="profil-container">
                <div className="info-container">
                    <h1 className='h1-profile'>Welcome back, {currentUser.full_name}</h1>
                    <h2 className='h2-profile'>{currentUser.functie}</h2>
                    <div className='info'>
                        <h2 className='h2-profile'>Comunitate</h2>
                        <h2>{currentUser.comunitate}</h2>
                    </div>
                    <div className='info'>
                        <h2 className='h2-profile'>Departamente</h2>
                        <div className="departamente">
                            <h2>{currentUser.first_department}</h2>
                            <h2>{currentUser.second_department}</h2>
                            <h2>{currentUser.third_department}</h2>
                        </div>
                    </div>
                    <div className='info'>
                        <h2 className='h2-profile'>Proiect</h2>
                        <h2>{currentUser.proiect}</h2>
                    </div>
                    <div className="info">
                    {/* {currentUser.functie_id==='HR' && 
                        <button onClick={handleClickHR} className='buton-hr'>Feedback</button>} */}
                    {currentUser.functie_id === 'C' || currentUser.functie_id === 'D' ?
                        <div>
                            <div className="eNPS">
                                <h3>employee Net Promoter Score - eNPS</h3>
                                {isNPS && <h2>{NPS}</h2>}
                            </div>    
                            <button onClick={handleClickLaunch} className='buton-hr'>Lansează eNPS</button>
                            {isNPSVisible && <button onClick={handleClickEnd} className='buton-hr' id='stop-hr'>Stop eNPS</button>}
                            <button onClick={handleClickView} className='buton-hr'>Vizualizează eNPS</button>
                        </div>
                        : <></>
                    }
                    </div>
                </div>
                {/* <h1>{isLoggedIn}</h1> */}
            </div>
        </>
    )
}

export default Profil