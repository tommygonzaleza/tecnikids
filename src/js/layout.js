import React from 'react';
import '../styles/index.css';
import { MyFooter } from './components/MyFooter';
import { MyNavbar } from './components/MyNavbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeView } from "./views/homeView";
import { ProgramsView } from "./views/programsView";
import { CompanyView } from "./views/companyView";
import { CoursesView } from './views/coursesView';
import { ColegiosView } from './views/colegiosView';
import { EventosView } from './views/eventosView';
import { ContactosView } from './views/contactosView';
import { RoboteandoView } from './views/programViews/roboteandoView';
import { PhotonView } from './views/programViews/photonView';
import { AutostemView } from './views/programViews/autostemView';
import { AerostemView } from './views/programViews/aerostemView';
import { TomiView } from './views/programViews/tomiView';
import { PonteEnLineaView } from './views/programViews/ponteEnLineaView';
import { BuckyView } from './views/programViews/buckyView';
import { ArduinoView } from './views/programViews/arduinoView';
import { F1View } from './views/programViews/f1View';
import { PlanVacacionalView } from './views/planVacacionalView';
import { CursoPythonView } from "./views/cursoPythonView";

export const Layout = () => {

    return(
        <div className="d-flex flex-column layout-styles">
            <MyNavbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route path="/company-view" component={CompanyView} />
                    <Route path="/programs-view" component={ProgramsView} />
                    <Route path="/courses-view" component={CoursesView} />
                    <Route path="/colegios-view" component={ColegiosView} />
                    <Route path="/eventos-view" component={EventosView} />
                    <Route path="/contactos-view" component={ContactosView} />
                    <Route path="/roboteando-view" component={RoboteandoView} />
                    <Route path="/photon-view" component={PhotonView} />
                    <Route path="/autostem-view" component={AutostemView} />
                    <Route path="/aerostem-view" component={AerostemView} />
                    <Route path="/tomi-view" component={TomiView} />
                    <Route path="/ponte-en-linea-view" component={PonteEnLineaView} />
                    <Route path="/bucky-view" component={BuckyView} />
                    <Route path="/arduino-view" component={ArduinoView} />
                    <Route path="/f1-view" component={F1View} />
                    <Route path="/plan-vacacional-view" component={PlanVacacionalView} />
                    <Route path="/curso-python-view" component={CursoPythonView} />
                    <Route render={() => <h1>Not Found!</h1>} />
                </Switch>
            </BrowserRouter>
            <MyFooter />
        </div>
    )
}