import * as types from './actionTypes';

const initialState = {
    details: {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        bio: '',
    }
}

function RegisterationReducer(state = initialState, action) {
    switch (action.type) {
        case types.REGISTER:
            return {
                ...state, details:action.payload
            }
        case types.EDIT_PROFILE:
            return {
                ...state, details:action.payload
            }
        default:
            return state;
    }

}

export default RegisterationReducer;