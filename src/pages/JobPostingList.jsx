import React, { useState, useEffect } from 'react'
import JobPostingService from '../services/jobPostingService';

export default function JobPostingList() {

    const [jobPostings, setjobPostings] = useState([]);

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getActiveJobPosting().then(result => setjobPostings(result.data.data));
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered border-dark table-sm caption-top">
                <caption>Aktif İş İlanları</caption>
                <thead>
                    <tr className="table-secondary">
                        <th scope="col">Şirket Adı</th>
                        <th scope="col">İş Pozisyonu</th>
                        <th scope="col">Açık Pozisyon Sayısı</th>
                        <th scope="col">Yayınlanma Tarihi</th>
                        <th scope="col">Son Başvuru Tarihi</th>
                    </tr>
                </thead>
                <tbody>
                    {jobPostings.map((jobPosting) => (
                        <tr key={jobPosting.id}>
                            <td>{jobPosting.companyName}</td>
                            <td>{jobPosting.jobTitleName}</td>
                            <td>{jobPosting.openPositionCount}</td>
                            <td>{jobPosting.releaseDate}</td>
                            <td>{jobPosting.applicationDeadline}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
