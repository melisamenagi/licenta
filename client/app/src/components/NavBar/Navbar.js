import React from "react";
import {  NavLink, useNavigate, Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { store } from "../../features/store"
import { logOut } from "../../features/sessionSlice"
import "./Navbar.css"

function Navbar () {
  const isLoggedIn = useSelector(state => store.getState().isLoggedIn)
  const currentUser = useSelector(state => store.getState().user)
  const functie_id = currentUser.functie_id
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isFeedbackIntermediar = useSelector(state => store.getState().isFeedbackIntermediar)

  const handleLogout = e => {
    dispatch(logOut())
    navigate("/")
  }

  return (
    <div className="navbar">
        <NavLink to="/" style={{ textDecoration: 'none' }}><img id="logo" src={require("../../assets/Logo_VIP.png")} alt="Logo" /></NavLink>
        <ul>
                  {/* {isClient ? 
                    <>
                      <li>
                        <NavLink className="headerlinks" to={`/${currentUser.user.id}/groups`} style={{ textDecoration: 'none' }}>Your groups</NavLink>
                      </li>
                      <li>
                        <NavLink className="headerlinks" to={`/${currentUser.user.id}/friends`} style={{ textDecoration: 'none' }}>Your friends</NavLink>
                      </li>
                    </>
                     : 
                    <li>
                    <NavLink className="headerlinks" to={`/${currentUser.user.id}/products`} style={{ textDecoration: 'none' }}>Your products</NavLink>
                    </li>
                  }
                  {isClient ?
                      <>
                        <li>
                          <NavLink className="headerlinks" to="/profile/client" style={{ textDecoration: 'none' }}>Profile</NavLink>
                        </li>
                      </> : 
                        <li>
                          <NavLink className="headerlinks" to="/profile/business" style={{ textDecoration: 'none' }}>Profile</NavLink>
                        </li>
                  } */}
          {functie_id==='O' && <>
            <li>
                <Link className='links' to='/dashboard/comunitate' style={{textDecoration: 'none'}}>Comunitate</Link>
            </li>
            <li>
                <NavLink className='links' to='/dashboard/departamente' style={{textDecoration: 'none'}}>Departamente</NavLink>
            </li>
            <li>
              <NavLink className='links' to='/dashboard/todo' style={{textDecoration: 'none'}}>De dat</NavLink>
            </li>
            <li>
              <NavLink className='links' to='/dashboard/done' style={{textDecoration: 'none'}}>Oferit</NavLink>
            </li>
          </>}
          {functie_id==='C' && <li><NavLink className='links' to='/dashboard/comunitate/management' style={{textDecoration: 'none'}}>Comunitate</NavLink></li>}
          {functie_id==='D' && <li><NavLink className='links' to='/dashboard/departament/management' style={{textDecoration: 'none'}}>Departament</NavLink></li>}
          {functie_id==='HR' && <>
            <li>
                <NavLink className='links' to='/dashboard/comunitate/hr' style={{textDecoration: 'none'}}>Comunități</NavLink>
            </li>
            <li>
                <NavLink className='links' to='/dashboard/departamente' style={{textDecoration: 'none'}}>Departamente</NavLink>
            </li>
            <li>
                <NavLink className='links' to='/dashboard/indicators' style={{textDecoration: 'none'}}>Indicatori</NavLink>
            </li>
            </>
          }
          {functie_id==='R' && <li><NavLink className='links' to='/recrutare' style={{textDecoration: 'none'}}>Recrutare</NavLink></li>}
          <li>
            <NavLink className="links" to="/dashboard/profil" style={{ textDecoration: 'none' }}>Profil</NavLink>
          </li>
          <li>
            <button onClick={handleLogout} className="logoutbutton" style={{ textDecoration: 'none' }}> Log Out </button>
          </li>
        </ul>   
    </div>
  )
}

export default Navbar
