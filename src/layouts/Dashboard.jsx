import React from 'react'
import Home from '../pages/Home'
import Categories from './Categories'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import JobTitleList from '../pages/JobTitleList'
import JobPostingList from '../pages/JobPostingList'
import JobPostingAdd from '../pages/JobPostingAdd'
import AdminJobPostingControl from '../pages/admin/JobPostingControl'
import { Route, Redirect, Switch } from 'react-router'


export default function Dashboard() {
    return (
        <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/employers" component={EmployerList}></Route>
                        <Route exact path="/candidates" component={CandidateList}></Route>
                        <Route exact path="/jobTitles" component={JobTitleList}></Route>
                        <Route exact path="/jobPostings" component={JobPostingList}></Route>
                        <Route exact path="/jobPostingAdd" component={JobPostingAdd}></Route>
                        <Route exact path="/adminJobPostingControl" component={AdminJobPostingControl}></Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
    )
}
