import React from 'react'

export default function SignedIn(props) {
  return (

    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <img src="https://erolokutucu.com/wp-content/uploads/2011/03/At-Hobi-2.jpg" alt="Avatar" className="avatar" />
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Murat Güney
        </a>
        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="#">Bilgilerim</a></li>
          <li><hr className="dropdown-divider"></hr></li>
          <li><a className="dropdown-item" href="#">Başvurulan İlanlar</a></li>
          <li><hr className="dropdown-divider"></hr></li>
          <li><a className="dropdown-item" onClick={props.signOut} href="#">Çıkış</a></li>
        </ul>
      </li>
    </ul>
  )
}
