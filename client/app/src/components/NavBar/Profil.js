import React from "react"
import { Link } from 'react-router-dom'
import { store } from "../../features/store"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "./Navbar"
import "./Profil.css"
import { startFeedbackIntermediar } from "../../features/sessionSlice"

function Profil(){
    const currentUser = useSelector(state => store.getState().user)
    const isLoggedIn = useSelector(state => store.getState().isLoggedIn)
    console.log(currentUser)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(startFeedbackIntermediar())
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
                    {currentUser.functie_id==='HR' && 
                        <button onClick={handleClick} className='buton-hr'>Feedback intermediar</button>}
                    </div>
                </div>
                {/* <h1>{isLoggedIn}</h1> */}
            </div>
        </>
    )
}

export default Profil