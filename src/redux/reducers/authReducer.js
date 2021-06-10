export const SET_AUTH = "SET_AUTH";
export const SET_INFO = "SET_INFO";
export const IS_LOGIN = "IS_LOGIN";

const initialState = {
    isAuth: true,
    info: {},
    isLogin: false,
    role: 2,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isAuth: action.status };
        case SET_INFO:
            return { ...state, info: action.payload };
        case IS_LOGIN:
            return { ...state, isLogin: action.isFetching };
        default:
            return state;
    }
};

export default authReducer;