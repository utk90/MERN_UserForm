import axios from 'axios';
import { CLEAR_ERRORS, CREATE_USER_FAIL, CREATE_USER_REQUEST, CREATE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS, GET_USER_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "../constants/users"

export const getUsers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_USER_REQUEST });
        const data = await axios.get('/api/v1/users');
        dispatch({
            type: GET_ALL_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_USER_FAIL,
        })
    }
}

export const getUserById = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_REQUEST });
        const data = await axios.get(`/api/v1/users/${id}`);
        dispatch({
            type: GET_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_USER_FAIL,
        })
    }
}

export const updateUser = (userData, id) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_USER_REQUEST });
        const config = { headers: { 'Content-Type': 'application/json' } };
        const data = await axios.put(`/api/v1/users/${id}`, userData, config);
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
        })
    }
}

export const createUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_USER_REQUEST });
        const config = { headers: { 'Content-Type': 'application/json' } };
        const data = await axios.post(`/api/v1/users`, userData, config);
        dispatch({
            type: CREATE_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CREATE_USER_FAIL,
        })
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_USER_REQUEST });
        const data = await axios.delete(`/api/v1/users/${id}`);
        dispatch({
            type: DELETE_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
        })
    }
}

// clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

