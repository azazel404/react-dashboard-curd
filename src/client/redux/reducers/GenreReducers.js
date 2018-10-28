import {
    GET_GENRES,
    GET_GENRE,
    DELETE_GENRE,
    SET_TEXT_FILTER,
    GENRE_LOADING
    }
from "../actions/types";


const initialState = {
    genres : [],
    genre : {},
    loading : true
}

export default function(state = initialState, action){
    switch (action.type) {
        case GENRE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
                loading: false
            };
        case GET_GENRE:
            return {
                ...state,
                genre: action.payload,
                loading: false
            };
        case DELETE_GENRE:
            return {
                ...state,
                genres: state.genres.filter(genre => genre._id !== action.payload)
            };
        default:
            return state;
    }
}

