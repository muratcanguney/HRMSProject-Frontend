import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function Categories() {
    return (
        <div className="list-group" id="list-tab" >
            <Link className="list-group-item list-group-item-action list-group-item-secondary" id="anaSayfa" to="/"><FontAwesomeIcon icon ={faHome} className = "me-1"/>Ana Sayfa</Link>
            <Link className="list-group-item list-group-item-action list-group-item-secondary" id="ilanAra" to="jobPostings">İlan Ara</Link>
            <Link className="list-group-item list-group-item-action list-group-item-secondary" id="firmaAra" to="findCompanys">Firma Ara</Link>
            <Link className="list-group-item list-group-item-action list-group-item-secondary" id="isArayanlar" to="candidates">İş Arayan Adaylar</Link>
            <Link className="list-group-item list-group-item-action list-group-item-secondary" id="isVerenler" to="employers">İşverenler</Link>
            <Link className="list-group-item list-group-item-action list-group-item-secondary" id="isPozisyonlari" to="jobTitles">İş Pozisyonları</Link>
            <Link className="list-group-item list-group-item-action list-group-item-secondary" id="CV" to="findCVs">
                <div className="d-flex w-100 justify-content-center">
                    <h5>CV</h5>
                </div>
                <p>CV ekleyip, bulunmanı sağlayabilirsin. Şimdi CV'ni oluştur, güncelle..</p>
            </Link>
            <Link className="list-group-item list-group-item-action list-group-item-secondary" id="adminJobPostControl" to="adminJobPostingControl">
                <div className="d-flex w-100 justify-content-center">
                    <h5>ADMIN İŞ İLANI KONTROL PANELİ</h5>
                </div>
                <p>Admin paneli yapıldığında oraya taşınacak !!.</p>
            </Link>
        </div>
    )
}
