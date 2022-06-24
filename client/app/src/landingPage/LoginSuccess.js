import React, { useEffect } from "react"
import Axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { signIn } from "../features/sessionSlice"
import { Navigate } from "react-router-dom";

function LandingPage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        // setTimeout(() => {
        //     window.close()
        // }, 1000)
        getUser()
    }, [])

    const getUser = () => {
        Axios.get(`http://localhost:3001/api/auth/user`, {withCredentials: true}).then(response => {
            console.log("User: ", response.data)
            dispatch(signIn(response.data))
            navigate('/dashboard/profil')
        })
        .catch(err => console.log("Not authenticated", err))
      }
      
    return(
        <div>
            <h1>Thanks for logging in!</h1>
            {/* <Navigate to="/dashboard"/> */}
        </div>
    )
}

export default LandingPage