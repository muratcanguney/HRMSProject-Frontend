import React, { useState, useEffect } from 'react'
import EmployerService from '../services/employerService';

export default function EmployerList() {

    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getAllEmployer().then(result => setEmployers(result.data.data));
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered border-dark table-sm caption-top">
                <caption>İşveren Listesi</caption>
                <thead>
                    <tr className="table-secondary">
                        <th scope="col">Şirket Adı</th>
                        <th scope="col">Web Adresi</th>
                        <th scope="col">E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {employers.map((employer) => (
                        <tr key={employer.userId}>
                            <td>{employer.companyName}</td>
                            <td>{employer.webAdress}</td>
                            <td>{employer.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
