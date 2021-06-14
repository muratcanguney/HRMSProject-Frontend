import React from 'react'
import Categories from './Categories'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import JobTitleList from '../pages/JobTitleList'
import JobPostingList from '../pages/JobPostingList'
import { Route, Redirect, Switch } from 'react-router'


export default function Dashboard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Categories />
                </div>
                <div className="col-9">
                    <Switch>
                        <Route exact path="/" component={JobPostingList}></Route>
                        <Route exact path="/employers" component={EmployerList}></Route>
                        <Route exact path="/candidates" component={CandidateList}></Route>
                        <Route exact path="/jobTitles" component={JobTitleList}></Route>
                        <Route exact path="/jobPostings" component={JobPostingList}></Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
