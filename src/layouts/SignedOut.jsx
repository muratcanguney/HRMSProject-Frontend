import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { faUserTie, faSignInAlt, faStream, faListAlt } from '@fortawesome/free-solid-svg-icons';

export default function SignedOut(props) {
    return (

        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <button className="btn btn-primary me-2" onClick={props.signIn} type="button" ><FontAwesomeIcon icon={faSignInAlt} className="me-2" size="lg" />Giriş Yap</button>
                <button className="btn btn-primary me-2" type="button"><FontAwesomeIcon icon={faStream} className="me-2" size="lg" />Kayıt Ol</button>
                <button className="btn btn-primary me-2" type="button"><FontAwesomeIcon icon={faUserTie} className="me-2" size="lg" />İşveren</button>
                <Link to="/jobPostingAdd"><button className="btn btn-outline-success" type="button"><FontAwesomeIcon icon={faListAlt} className="me-2" size="lg" />İlan Yayınla</button></Link>
            </li>
        </ul>
    )
}
