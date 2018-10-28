import {
    GET_MOVIES,
    GET_MOVIE,
    DELETE_MOVIE,
    MOVIE_LOADING,
    SET_TEXT_FILTER
}
    from "./types";
import axios from 'axios';

export const fetchMovie = () => dispatch => {
      dispatch(movieLoading())
      axios.get('/api/movies')
        .then((response) => {
            dispatch({
                type: GET_MOVIES,
                payload: response.data
            })
        })
}
export const addMovie = (movieData, history) => dispatch => {
     axios.post(`/api/movies`, movieData)
        .then(res => 
            history.push('/movie'))
}

export const editMovie = (id, movieData, history) =>  dispatch => {
    axios.put(`/api/movies/${id}`, movieData)
        .then(res => history.push('/movie'))
}



export const showMovie = (id) =>  dispatch => {
     axios.get(`/api/movies/${id}`)
        .then(res => {
            dispatch({
                type: GET_MOVIE,
                payload: res.data
            })
        })
}

export const removeMovie = (id) =>  dispatch => {
     axios.delete(`/api/movies/${id}`)
        .then(response => {
            dispatch({
                type: DELETE_MOVIE,
                payload: id
            })
        })
}


export const movieLoading = () => {
    return {
        type: MOVIE_LOADING
    }
}

