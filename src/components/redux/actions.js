import * as types from './actionTypes';

export const registration = (firstname, lastname, username, email, password, bio) => {
    return (dispatch) => {
        dispatch({
            type:types.REGISTER,
            payload: {
                firstname,
                lastname,
                username,
                email,
                password,
                bio
            }
        })
    };
}

export const edit_profile = (firstname, lastname, username, email, password, bio) => {
    return (dispatch) => {
        dispatch({
            type:types.EDIT_PROFILE,
            payload: {
                firstname,
                lastname,
                username,
                email,
                password,
                bio
            }
        })
    };
}

