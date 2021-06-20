import React, { useState } from 'react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light navbarHrms mb-4">
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img src="https://res.cloudinary.com/dvjxaboh2/image/upload/v1623709437/2b1e470b7de447fca045290ea15b4627_svu9ii.png" width="150" height="40" /></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav ,#navbarSearch, #navbarButton" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link me-5" aria-current="page" to="about"><FontAwesomeIcon icon={faAddressCard} className="me-2" />Hakkında</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarSearch">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <div className="input-group">
                                <select className="form-select me-1" id="inputGroupSelect04" style={{width: 100}} aria-label="Example select with button addon">
                                    <option selected value="" style={{ color: "#ccc" }}>Şehir</option>
                                    <option value='-' disabled>――――</option>
                                    <option value="1">Adana</option>
                                    <option value="2">İstanbul</option>
                                    <option value="3">Ankara</option>
                                </select>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="İş Ara" aria-label="Search" style={{width: 250}}/>
                                    <button className="btn btn-outline-success" type="submit">Ara</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarButton">
                    {isAuthenticated ? <SignedIn signOut={handleSignOut} bisey="1"></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>}
                </div>
            </div>
        </nav>
    )
}
