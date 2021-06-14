import React, { useState, useEffect } from 'react'
import JobTitleService from '../services/jobTitleService';

export default function JobTitleList() {

    const [jobTitles, setjobTitles] = useState([]);

    useEffect(() => {
        let jobTitleService = new JobTitleService()
        jobTitleService.getAllJobTitle().then(result => setjobTitles(result.data.data));
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered border-dark table-sm caption-top">
                <caption>iş Pozisyonu Listesi</caption>
                <thead>
                    <tr className="table-secondary">
                        <th scope="col">İş Pozisyonu</th>
                        <th scope="col">Açıklama</th>
                    </tr>
                </thead>
                <tbody>
                    {jobTitles.map((jobTitle) => (
                        <tr key={jobTitle.id}>
                            <td>{jobTitle.title}</td>
                            <td>{jobTitle.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
