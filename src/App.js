import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import VasesPage from './pages/vasesPage/VasesPage';
import MiscellaneousPage from './pages/MiscellaneousPage/MiscellaneousPage';
import BowlsPage from './pages/bowlsPage/BowlsPage';
import HomewarePage from './pages/homewarePage/HomewarePage';
import TablewarePage from './pages/tablewarePage/TablewarePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import './app.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
    const [user, setUser] = useState({
        currentUser: null,
    });

    const unsubscribeFromAuth = () => null;

    useEffect(() => {
        auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot((snapShot) => {
                    setUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                    console.log('estado', user);
                });
            }
            setUser({ currentUser: userAuth });
        });
        unsubscribeFromAuth();
    }, []);

    return (
        <div className="App">
            <Header currentUser={user.currentUser} />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/vases" component={VasesPage} />
                <Route path="/miscellaneous" component={MiscellaneousPage} />
                <Route path="/bowls" component={BowlsPage} />
                <Route path="/homeware" component={HomewarePage} />
                <Route path="/tableware" component={TablewarePage} />
                <Route path="/signin" component={Registration} />
            </Switch>
        </div>
    );
}

export default App;

// useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//         setUser({ currentUser: user });
//         console.log(user);
//     });
//     unsubscribeFromAuth();
// }, []);
