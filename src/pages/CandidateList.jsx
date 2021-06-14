import React, { useState, useEffect } from 'react'
import CandidateService from '../services/candidateService';

export default function CandidateList() {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getAllCandidate().then(result => setCandidates(result.data.data));
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered border-dark table-sm caption-top">
                <caption>İş Arayan Adaylar</caption>
                <thead>
                    <tr className="table-secondary">
                        <th scope="col">Adı</th>
                        <th scope="col">Soyadı</th>
                        <th scope="col">TC No</th>
                        <th scope="col">Doğum Tarihi</th>
                        <th scope="col">E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate) => (
                        <tr key={candidate.userId}>
                            <td>{candidate.firstName}</td>
                            <td>{candidate.lastName}</td>
                            <td>{candidate.identityNumber}</td>
                            <td>{candidate.birthDate}</td>
                            <td>{candidate.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
