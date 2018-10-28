import {
    GET_MOVIES,
    GET_MOVIE,
    DELETE_MOVIE,
    SET_TEXT_FILTER,
    MOVIE_LOADING
}
    from "../actions/types";


const initialState = {
    movies: [],
    movie: {},
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case MOVIE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
                loading: false
            };
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie._id !== action.payload)
            };
        default:
            return state;
    }
}

