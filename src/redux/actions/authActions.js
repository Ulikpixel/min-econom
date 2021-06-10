import { SET_AUTH, SET_INFO, IS_LOGIN } from "../reducers/authReducer";
import { authAPI } from "../../API";
import { stopSubmit } from "redux-form";

// actions
const setAuth = (status) => ({ type: SET_AUTH, status });
const setRole = (payload) => ({ type: SET_INFO, payload });
const isLogin = (isFetching) => ({ type: IS_LOGIN, isFetching });

// thunks

const login = (body) => (dispatch) => {
    dispatch(isLogin(true));
    authAPI.login(body).then(({ data }) => {
        dispatch(isLogin(false));
        dispatch(setAuth(true));
        dispatch(setRole(data));
    }).catch((err) => {
        dispatch(isLogin(false));
        dispatch(stopSubmit("login", { _error: "Неверный логин или пароль" }))
    });
};