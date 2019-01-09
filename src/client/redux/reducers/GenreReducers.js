import {
    GET_GENRES,
    GET_GENRE,
    DELETE_GENRE,
    FETCH_GENRE_SEARCH,
    GENRE_LOADING
    }
from "../actions/types";


const initialState = {
    genres : [],
    genre : {},
    loading : true,
    searchQuery:''
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
    ///pembuatan case state genre search
        case FETCH_GENRE_SEARCH:
            return{
                ...state,
                searchQuery : action.payload
            }
        default:
            return state;
    }
}

