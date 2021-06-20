import React from 'react'
import Categories from '../layouts/Categories'

export default function Home() {
    return (
        <div className="row">
            <div className="col-3">
                <Categories />
            </div>
            <div id="carouselExampleCaptions" className="carousel slide col-9" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://res.cloudinary.com/dvjxaboh2/image/upload/v1623789993/Computer-engineer-at-work_o9acrt.jpg" height="300" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="blackText">Stajyer İş İlanları</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dvjxaboh2/image/upload/v1623789993/dbadmin2_g3d96k.jpg" height="300" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="blackText">Veri Tabanı Yöneticisi İş İlanları</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://res.cloudinary.com/dvjxaboh2/image/upload/v1623789993/5f5ac45d7ed0ee001e25eb26_nklj6w.jpg" height="300" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="blackText">Bilgisayar Mühendisi İş İlanları</h1>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Önceki</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Sonraki</span>
                </button>
            </div>
        </div>
    )
}
