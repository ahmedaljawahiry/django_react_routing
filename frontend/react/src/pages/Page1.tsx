import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SubPage1 from "./SubPage1";


export default function Page1() {
    let match = useRouteMatch();

    return <div>
        <h1>This is a React route</h1>

        <Switch>
            <Route path={`${match.path}/sub-page`}>
                <SubPage1/>
            </Route>
        </Switch>
    </div>;
}