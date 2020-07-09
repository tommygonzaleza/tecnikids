import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeView } from "./views/homeView";
import { ProgramsView } from "./views/programsView";
import { CompanyView } from "./views/companyView";
import { CoursesView } from './views/coursesView';

export const Layout = () => {
    const basename = process.env.BASENAME || "";

    return(
        <div className="d-flex flex-column h-100">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/programs-view" component={ProgramsView} />
                    <Route path="/company-view" component={CompanyView} />
                    <Route path="/courses-view" component={CoursesView} />
                    <Route render={() => <h1>Not Found!</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
