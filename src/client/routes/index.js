import React from "react";
import {Route, Switch} from "react-router-dom";
import PrivateRoutes from "../utils/PrivateRoute";


import Login from "../components/Pages/auth/Login";
import Register from "../components/Pages/auth/Register";
import Landing from "../components/layouts/Landing";

import Genre from "../components/Pages/genre/Genre";
import GenreCreate from "../components/Pages/genre/Genre-create";
import GenreUpdate from "../components/Pages/genre/Genre-edit";

import Movie from "../components/Pages/movie/Movie";
import MovieCreate from "../components/Pages/movie/Movie-create";
import MovieUpdate from "../components/Pages/movie/Movie-edit";
// import MovieUpdate from "../components/Pages/movie/Movie-edit";
// import ProfileCreate from "../components/Pages/profile/Profile-create";



const TopLevelRoutes = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />

        <PrivateRoutes path="/dashboard" exact component={Landing} />
        <PrivateRoutes path="/genre"  exact component={Genre} />
        <PrivateRoutes path="/genre-create" exact component={GenreCreate} />
        <PrivateRoutes path="/genre/:id" exact component={GenreUpdate} />

        <PrivateRoutes path="/movie" exact component={Movie} />
        <PrivateRoutes path="/movie-create" exact component={MovieCreate} />
        <PrivateRoutes path="/movie/:id" exact component={MovieUpdate} />
        {/* <PrivateRoutes path="/movie/:id" exact component={MovieUpdate} /> */}
    </Switch>
)
export default TopLevelRoutes;