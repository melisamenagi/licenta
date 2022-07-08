import logo from './logo.svg';
import './App.css';
import { store } from "./features/store"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import LandingPage from './landingPage/LandingPage'
import LoginSuccess from './landingPage/LoginSuccess'
import Axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import Profil from './components/NavBar/Profil'
import { signIn } from "./features/sessionSlice"
import Comunitate from './components/NavBar/Comunitate'
import Departamente from './components/NavBar/Departamente';
import Proiect from './components/Proiect';
import ComunitateManagement from './components/NavBar/ComunitateManagement';
import DepartamentManagement from './components/NavBar/DepartamentManagement';
import ComunitateList from './components/NavBar/ComunitateList';
import TrainingFeedback from './components/LearningPlan/TrainingFeedback';
import Navbar from './components/NavBar/Navbar';
import Dashboard from './dashboard/Dashboard';
import TrainingFeedbackManagement from './components/LearningPlan/TrainingFeedbackManagement';
import Departament from './components/NavBar/Departament';
import FeedbackIntermediar from './components/FeedbackIntermediar/FeedbackIntermediar';
import FormManagement from './components/FeedbackIntermediar/FormManagement';
import Todo from './components/NavBar/Todo';
import Done from './components/NavBar/Done';
import TrainingFeedbackDone from './components/LearningPlan/TrainingFeedbackDone';
import NPS from './components/Indicator/NPS';
import Indicators from './components/NavBar/Indicators';
import EES from './components/Indicator/EES';
import ESI from './components/Indicator/ESI';

function App() {
  const isLoggedIn = useSelector(state => store.getState().isLoggedIn)
  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const getUser = () => {
  //   Axios.get(`http://localhost:3001/api/auth/user`, {withCredentials: true}).then(response => {
  //       console.log("User: ", response.data)
  //       dispatch(signIn(response.data))
  //       navigate('/profile')
  //   })
  //   .catch(err => console.log("Not authenticated", err))
  // }
  
  // const handleGoogleLogin = () =>{
  //   const googleLoginURL = 'http://localhost:3001/api/auth/login'
  //   const newWindow = window.open(googleLoginURL, "_blank", "popup=1,width=400,height=400", )
  
  //   if(newWindow){
  //     setTimeout(()=>{
  //       if(newWindow.closed){
  //         getUser()
  //       }
    
  //     }, 7000)
  //   }
  // }
  

  return (
    <div>
      {/* <LandingPage />
      <GoogleButton /> */}
        <Router>
          <Routes>
          {/* {isLoggedIn && <Navbar />} */}
            <Route path="/" exact element={ <LandingPage />}></Route>
            {/* <Route path='/login' element={<GoogleButton onClick={handleGoogleLogin}/>}></Route> */}
            <Route path='/login/success' element={<LoginSuccess />}></Route>
            <Route exact path='/login/redirect'>Error logging in.</Route>
            <Route path='/dashboard' element={<Dashboard />}>
              <Route path='profil' element={<Profil />}></Route>
              {/* <Route path='/login/success' element={<Profile onClick={handleGoogleLogin}/>}></Route> */}
              <Route path='comunitate' element={<Comunitate />}></Route>
              <Route path='departamente' element={<Departamente />}></Route>
              <Route path='comunitati/:entitate' element={<Comunitate />}></Route>
              <Route path='departamente/:entitate' element={<Departament />}></Route>
              <Route path='proiect' element={<Proiect />}></Route>
              <Route path='comunitate/management' element={<ComunitateManagement />}></Route>
              <Route path='departament/management' element={<DepartamentManagement />}></Route>
              <Route path='comunitate/hr' element={<ComunitateList />}></Route>
              <Route path='indicators' element={<Indicators />}></Route>
              <Route path='training/:entitate/:id' element={<TrainingFeedback />}></Route>
              <Route path='training/:entitate/:id/feedback' element={<TrainingFeedbackDone />}></Route>
              <Route path='training/management/:entitate/:id' element={<TrainingFeedbackManagement />}></Route>
              <Route path='indicator/:entitate/:id/eNPS' element={<NPS />}></Route>
              <Route path='indicator/:entitate/:id/EES' element={<EES />}></Route>
              <Route path='indicator/:entitate/:id/ESI' element={<ESI />}></Route>
              <Route path='todo' element={<Todo />}></Route>
              <Route path='done' element={<Done />}></Route>
            </Route>
          </Routes> 
        </Router>
    </div>
  )
}

export default App;
