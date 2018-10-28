import {
    GET_GENRES,
    GET_GENRE,
    DELETE_GENRE,
    GENRE_LOADING,
    SET_TEXT_FILTER
}
    from "./types";
import axios from 'axios';

export const fetchGenre = () =>  dispatch => {
     dispatch(GenreLoading())
     axios.get('/api/genres')
        .then((response) => {
           dispatch({
               type: GET_GENRES,
               payload : response.data
           })
        }) 
}
export const addGenre = (genreData, history) =>  dispatch => {
     axios.post(`/api/genres`, genreData)
        .then(res => history.push('/genre'))
}

export const editGenre = (id,genreData, history) =>  dispatch => {
     axios.put(`/api/genres/${id}`, genreData)
        .then(res => history.push('/genre'))
}



export const showGenre = (id) =>  dispatch => {
     axios.get(`/api/genres/${id}`)
        .then(res => {
            dispatch({
                type: GET_GENRE,
                payload: res.data
            })
        })
}

export const removeGenre = (id) =>   dispatch => {
     axios.delete(`/api/genres/${id}`)
    .then(response => {
        dispatch({
            type: DELETE_GENRE,
            payload: id
        })
    })
} 


export const GenreLoading = () => {
    return{
        type: GENRE_LOADING
    }
}

