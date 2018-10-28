import {
    GET_PROFILE,
    GET_PROFILES,
    PROFILE_LOADING,
    SET_CURRENT_USER,
    CLEAR_CURRENT_PROFILE,
}
    from "./types";
import axios from 'axios';

// Get current profile
export const getCurrentProfile = () => async dispatch => {
    dispatch(setProfileLoading());
    axios
        .get('/api/profile')
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};
// Create Profile
export const createAndUpdate = (profileData, history) => async dispatch => {
    axios
        .post('/api/profile', profileData)
        .then(res => history.push('/profile'))
        .catch(err =>
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

// // Get all profiles
// export const getProfiles = () => dispatch => {
//     dispatch(setProfileLoading());
//     axios
//         .get('/api/profile/all')
//         .then(res =>
//             dispatch({
//                 type: GET_PROFILES,
//                 payload: res.data
//             })
//         )
//         .catch(err =>
//             dispatch({
//                 type: GET_PROFILES,
//                 payload: null
//             })
//         );
// };


// Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
};

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    };
};
