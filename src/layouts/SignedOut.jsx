import React from 'react'

export default function SignedOut(props) {
    return (

        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <button className="btn btn-primary me-2" onClick={props.signIn} type="button" >Giriş Yap</button>
                <button className="btn btn-primary" type="button">Kayıt Ol</button>
            </li>
        </ul>
    )
}
