import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import VasesPage from './pages/vasesPage/VasesPage';
import MiscellaneousPage from './pages/MiscellaneousPage/MiscellaneousPage';
import BowlsPage from './pages/bowlsPage/BowlsPage';
import HomewarePage from './pages/homewarePage/HomewarePage';
import TablewarePage from './pages/tablewarePage/TablewarePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';

import './app.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
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
