import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Routes from "./routes";
import jwt_decode from 'jwt-decode';

import SetAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser, clearCurrentProfile } from './redux/actions/AuthActions';

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    SetAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Clear current Profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/';
    }
}

ReactDOM.render((
<Provider store={store}>
        <BrowserRouter>
        <Routes />
        </BrowserRouter>
</Provider>
    ), document.getElementById('root'));


module.hot.accept();