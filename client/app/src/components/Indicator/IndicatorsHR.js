import React from "react"
import Axios from 'axios'
import IndicatorItem from "./IndicatorItem"
import { useState, useEffect } from 'react'
import './IndicatorsHR.css'

function IndicatorsHR(){
    const [EES, setEES] = useState(0)
    const [ESI, setESI] = useState(0)
    const [isNPSVisible, setIsNPSVisible] =useState(true)
    const [isVIPNPSVisible, setIsVIPNPSVisible] =useState(true)
    const [isEESVisible, setIsEESVisible] =useState(true)
    const [isESIVisible, setIsESIVisible] =useState(true)

    // const entitati = ["VIP", "Econosofia", "International Affairs", "Leadership Development", "Business Club", "Human Resources", "Business Development", "Public Relations", "Marketing", "Creative"]
    const entitati = ["VIP", "Econosofia",  "Human Resources"]

    useEffect(() => {
        getIndicators()
    }, []);  

    const handleClickLaunchHRNPS = () => {
        Axios.post("http://localhost:3001/api/indicator/Human Resources", {
            indicator: "eNPS"
        }).then(response => {
            console.log(response.data)
            setIsNPSVisible(true)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickEndHRNPS = () => {
        Axios.patch("http://localhost:3001/api/indicator/Human Resources/eNPS").then(response => {
            console.log(response.data)
            setIsNPSVisible(false)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickLaunchVIPNPS = () => {
        Axios.post("http://localhost:3001/api/indicator/VIP", {
            indicator: "eNPS"
        }).then(response => {
            console.log(response.data)
            setIsVIPNPSVisible(true)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickEndVIPNPS = () => {
        Axios.patch("http://localhost:3001/api/indicator/VIP/eNPS").then(response => {
            console.log(response.data)
            setIsVIPNPSVisible(false)
            // getFeedback()
        }).catch(err => console.log(err))    
    }


    const handleClickLaunchEES = () => {
        Axios.post("http://localhost:3001/api/indicator/VIP", {
            indicator: "EES"
        }).then(response => {
            console.log(response.data)
            setIsEESVisible(true)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickEndEES = () => {
        Axios.patch("http://localhost:3001/api/indicator/VIP/EES").then(response => {
            console.log(response.data)
            setIsEESVisible(false)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickLaunchESI = () => {
        Axios.post("http://localhost:3001/api/indicator/VIP", {
            indicator: "ESI"
        }).then(response => {
            console.log(response.data)
            setIsESIVisible(true)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const handleClickEndESI = () => {
        Axios.patch("http://localhost:3001/api/indicator/VIP/ESI").then(response => {
            console.log(response.data)
            setIsESIVisible(false)
            // getFeedback()
        }).catch(err => console.log(err))    
    }

    const getIndicators = () => {
        Axios.get(`http://localhost:3001/api/indicator/management/VIP/EES`).then(response => {
            const feedback = response.data
            let scoruri = feedback.map(f => f.scor)
            let sum = 0
            let count = 0
            scoruri.forEach(element => {
                sum += element
                count++
            });
            let procent = sum / count
            setEES(procent.toFixed(1))
        })
        .catch(err => console.log(err))
        
        Axios.get(`http://localhost:3001/api/indicator/management/VIP/ESI`).then(response => {
            const feedback = response.data
            let scoruri = feedback.map(f => f.scor)
            let sum = 0
            let count = 0
            scoruri.forEach(element => {
                sum += element
                count++
            });
            let procent = sum / count
            setESI(procent.toFixed(1))
        })
        .catch(err => console.log(err))
    }

    return(
        <>
            <div className="container">
                <p className="indicator-name">employee Net Promoter Score - eNPS</p>
                <button className="launch-button" onClick={handleClickLaunchHRNPS}>Lansează eNPS HR</button>
                {isNPSVisible && <button className="stop-button" onClick={handleClickEndHRNPS}>Stop eNPS HR</button>}
                <button className="launch-button" onClick={handleClickLaunchVIPNPS}>Lansează eNPS VIP</button>
                {isVIPNPSVisible && <button className="stop-button" onClick={handleClickEndVIPNPS}>Stop eNPS VIP</button>}
                <div className="indicator-nps">
                    {entitati.map((item) => {
                        return <IndicatorItem entitate={ item }/>
                    })}
                </div>
                {/* {NPSComponents} */}
                <p className="indicator-name">Employee Engagement Score - EES</p>
                <button className="launch-button" onClick={handleClickLaunchEES}>Lansează EES</button>
                {isEESVisible && <button className="stop-button" onClick={handleClickEndEES}>Stop EES</button>}
                <h1 className="indicator-score">{EES} / 5</h1>
                <p className="indicator-name">Employee Satisfaction Index - ESI</p>
                <button className="launch-button" onClick={handleClickLaunchESI}>Lansează ESI</button>
                {isESIVisible && <button className="stop-button" onClick={handleClickEndESI}>Stop ESI</button>}
                <h1 className="indicator-score">{ESI} / 100</h1>
            </div>
        </>
    )
}

export default IndicatorsHR