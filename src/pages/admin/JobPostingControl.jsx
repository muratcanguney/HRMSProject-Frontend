import React, { useState, useEffect } from 'react'
import JobPostingService from '../../services/jobPostingService'

export default function JobPostingControl() {

    const [jobPostingsControl, setjobPostingsControl] = useState([]);

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getAdminWaitingJobPostingConfirm().then(result => setjobPostingsControl(result.data.data));
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered border-dark table-sm caption-top">
                <caption>Yönetici Onayı Bekleyen İlanlar</caption>
                <thead>
                    <tr className="table-secondary">
                        <th scope="col">Şirket</th>
                        <th scope="col">İş Pozisyonu</th>
                        <th scope="col">Şehir</th>
                        <th scope="col">Tarih</th>
                        <th scope="col">Son Başvuru Tarihi</th>
                        <th scope="col">Çalışma Tipi</th>
                        <th scope="col">Çalışma Zamanı</th>
                    </tr>
                </thead>
                <tbody>
                    {jobPostingsControl.map((jobPostingControl) => (
                        <tr key={jobPostingControl.id}>
                            <td>{jobPostingControl.companyName}</td>
                            <td>{jobPostingControl.jobTitleName}</td>
                            <td>{jobPostingControl.city}</td>
                            <td>{jobPostingControl.releaseDate}</td>
                            <td>{jobPostingControl.applicationDeadline}</td>
                            <td>{jobPostingControl.jobTypeName}</td>
                            <td>{jobPostingControl.jobTimeName}</td>
                            <td><div className="d-grid gap-2"><button type="button" class="btn btn-success rounded-pill">Onayla</button>
                            <button type="button" class="btn btn-danger rounded-pill">Reddet</button></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}