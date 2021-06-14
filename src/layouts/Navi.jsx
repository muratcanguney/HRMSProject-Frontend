import React, { useState } from 'react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink, useHistory } from 'react-router-dom'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)   // burada çıkış butonuna tıklandığında yukarıdaki state i false yapması için fonksiyonu yazdık..
        history.push("/")  // useHistory kullandık. Çıkış yap butonuna tıkladığımızda ana sayfaya dönmesini sağladık..
    }

    function handleSignIn() {
        setIsAuthenticated(true)   // burada giriş yap butonuna tıklandığında yukarıdaki state i false yapması için fonksiyonu yazdık..
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/">HRMS</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav ,#navbarSearch, #navbarButton" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link me-5" aria-current="page" to="jobPostings">Aktif İlanlar</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarSearch">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="İş Ara" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Ara</button>
                            </form>
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
