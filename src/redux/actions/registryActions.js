import {
    SET_REQUEST, IS_FETCHING,
    SET_LIST_REGISTRY, IS_GET_REQUEST,
    SET_TOTAL_COUNT, SET_CURRENT_PAGE,
    IS_SEND, SEARCH
} from "../reducers/registryReducer";
import { registryAPI } from "../../localStorage";

// actions
const setRequest = (payload) => ({ type: SET_REQUEST, payload });
const isFetching = (status) => ({ type: IS_FETCHING, status });
const setRegistry = (payload) => ({ type: SET_LIST_REGISTRY, payload });
const isGetRequest = (status) => ({ type: IS_GET_REQUEST, status });
const isSend = (status) => ({ type: IS_SEND, status });
const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
export const setCurrentPage = (current) => ({ type: SET_CURRENT_PAGE, current });
export const searchRedux = (payload) => ({ type: SEARCH, payload });

// thunks
export const getRegistry = () => (dispatch) => {
    dispatch(isFetching(true));
    setTimeout(() => {
        const registry = registryAPI.get();
        dispatch(setRegistry(registry));
        dispatch(setTotalCount(registry.length));
        dispatch(isFetching(false));
    }, 2000)
};

export const getRequest = (id) => (dispatch) => {
    dispatch(isGetRequest(true));
    setTimeout(() => {
        dispatch(isGetRequest(false));
        dispatch(setRequest(registryAPI.getRequest(id)));
    }, 2000)
};

export const postRequest = (body) => (dispatch) => {
    dispatch(isSend(true));
    setTimeout(() => {
        registryAPI.post(body);
        dispatch(isSend(false));
    }, 2000)
};

