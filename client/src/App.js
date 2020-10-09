import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
import NotFound from './pages/notfound/notfound.component';

import {GlobalStyle} from './global.styles'

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const ContactPage = lazy(() => import('./pages/contact/contact.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({checkUserSession, currentUser}) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path={['/crwn-clothing', '/']} component={HomePage}/>
                            <Route path={'/shop'} component={ShopPage}/>
                            <Route path={'/checkout'} component={CheckoutPage}/>
                            <Route path={'/contact'} component={ContactPage}/>
                            <Route
                                exact
                                path='/signin'
                                render={() =>
                                    currentUser ? (
                                        <Redirect to='/'/>
                                    ) : (
                                        <SignInAndSignUpPage/>
                                    )
                                }
                            />
                            <Route component={NotFound}/>
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
