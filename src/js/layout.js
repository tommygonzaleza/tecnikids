import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeView } from "./views/homeView";
import { ProgramsView } from "./views/programsView";
import { CompanyView } from "./views/companyView";
import { CoursesView } from './views/coursesView';
import { RoboteandoView } from './views/programViews/roboteandoView';
import { PhotonView } from './views/programViews/photonView';
import { AutostemView } from './views/programViews/autostemView';
import { AerostemView } from './views/programViews/aerostemView';
import { TomiView } from './views/programViews/tomiView';
import { BuckyView } from './views/programViews/buckyView';
import { ArduinoView } from './views/programViews/arduinoView';
import { F1View } from './views/programViews/f1View';

export const Layout = () => {
    // const basename = process.env.BASENAME || "";

    return(
        <div className="d-flex flex-column h-100">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/company-view" component={CompanyView} />
                    <Route path="/programs-view" component={ProgramsView} />
                    <Route path="/courses-view" component={CoursesView} />
                    <Route path="/roboteando-view" component={RoboteandoView} />
                    <Route path="/photon-view" component={PhotonView} />
                    <Route path="/autostem-view" component={AutostemView} />
                    <Route path="/aerostem-view" component={AerostemView} />
                    <Route path="/tomi-view" component={TomiView} />
                    <Route path="/bucky-view" component={BuckyView} />
                    <Route path="/arduino-view" component={ArduinoView} />
                    <Route path="/f1-view" component={F1View} />
                    <Route render={() => <h1>Not Found!</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    ) 
}