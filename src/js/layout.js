import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeView } from "./views/homeView"

export const Layout = () => {
    const basename = process.env.BASENAME || "";

    return(
        <div className="d-flex flex-column h-100">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomeView} />
                    <Route render={() => <h1>Not Found!</h1>} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
