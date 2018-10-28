import { combineReducers } from "redux";
import GenreReducers from "./GenreReducers";
import MovieReducers from "./MovieReducers";
// import ProfileReducers from "./ProfileReducers";
import AuthReducers from "./AuthReducers";
import RentalReducers from "./RentalReducers";

export default combineReducers({
    auth : AuthReducers,
    genre: GenreReducers,
    movie : MovieReducers,
    rental: RentalReducers
})