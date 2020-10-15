import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.js';
import VasesPage from './pages/vasesPage/VasesPage.js';
import MiscellaneousPage from './pages/MiscellaneousPage/MiscellaneousPage.js';
import BowlsPage from './pages/bowlsPage/BowlsPage.js';
import HomewarePage from './pages/homewarePage/HomewarePage.js';
import TablewarePage from './pages/tablewarePage/TablewarePage.js';

import './app.css';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/vases" component={VasesPage} />
                <Route path="/miscellaneous" component={MiscellaneousPage} />
                <Route path="/bowls" component={BowlsPage} />
                <Route path="/homeware" component={HomewarePage} />
                <Route path="/tableware" component={TablewarePage} />
            </Switch>
        </div>
    );
}

export default App;
