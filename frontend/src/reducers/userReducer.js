import { GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_ALL_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAIL } from "../constants/users";

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case GET_ALL_USER_REQUEST:
        case GET_USER_REQUEST:
        case UPDATE_USER_REQUEST:
        case CREATE_USER_REQUEST:
            return {
                loading: true,
            }
        case GET_ALL_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case UPDATE_USER_SUCCESS:
        case CREATE_USER_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case GET_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }
        case GET_ALL_USER_FAIL:
            return {
                loading: false,
                users: null,
                error: action.payload
            }
        case GET_USER_FAIL:
            return {
                loading: false,
                user: null,
                error: action.payload
            }
        case UPDATE_USER_FAIL:
        case CREATE_USER_FAIL:
            return {
                loading: false,
                success: false
            }
        default:
            return state;
    }
}