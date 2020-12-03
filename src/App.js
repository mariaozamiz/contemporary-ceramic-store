import React, { useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/homepage/Homepage';
import VasesPage from './pages/vasesPage/VasesPage';
import MiscellaneousPage from './pages/MiscellaneousPage/MiscellaneousPage';
import BowlsPage from './pages/bowlsPage/BowlsPage';
import HomewarePage from './pages/homewarePage/HomewarePage';
import TablewarePage from './pages/tablewarePage/TablewarePage';
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import Registration from './components/registration/Registration';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import './app.css';

function App(props) {
    const unsubscribeFromAuth = useRef(null);

    useEffect(() => {
        unsubscribeFromAuth.current = auth.onAuthStateChanged(
            async (userAuth) => {
                if (userAuth) {
                    const userRef = await createUserProfileDocument(userAuth);
                    userRef.onSnapshot((snapShot) => {
                        props.setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data(),
                        });
                    });
                }
                props.setCurrentUser(userAuth);
            }
        );
        return unsubscribeFromAuth.current;
    }, []);

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
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        props.currentUser ? (
                            <Redirect to="/" />
                        ) : (
                            <Registration />
                        )
                    }
                />
            </Switch>
        </div>
    );
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
