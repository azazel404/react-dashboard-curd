import {
    GET_RENTALS,
    GET_RENTAL,
    DELETE_RENTAL,
    RENTAL_LOADING,
    SET_TEXT_FILTER
    }
from "../actions/types";


const initialState = {
    rentals : [],
    rental : {},
    loading : true
}

export default function(state = initialState, action){
    switch (action.type) {
        case RENTAL_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_RENTALS:
            return {
                ...state,
                rentals: action.payload,
                loading: false
            };
        case GET_RENTAL:
            return {
                ...state,
                rental: action.payload,
                loading: false
            };
        case DELETE_RENTAL:
            return {
                ...state,
                rentals: state.rentals.filter(rental => rental._id !== action.payload)
            };
        default:
            return state;
    }
}

