import React, { useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shopPage/ShopPage';
import CheckoutPage from './pages/checkoutPage/CheckoutPage';
import Registration from './components/registration/Registration';
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
                <Route exact path="/checkout" component={CheckoutPage} />
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
