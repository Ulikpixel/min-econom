export const SET_REQUEST = "SET_REQUEST";
export const IS_FETCHING = "IS_FETCHING";
export const SET_LIST_REGISTRY = "SET_LIST_REGISTRY";
export const IS_GET_REQUEST = "IS_GET_REQUEST";
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const IS_SEND = "IS_SEND";

export const SEARCH = "SEARCH";

const initialState = {
    list: [],
    totalCount: 0,
    pageSize: 3,
    currentPage: 1,
    request: {},
    isFetching: false,
    isGetRequest: false,
    isSend: false,
};

const registryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REQUEST:
            return { ...state, request: action.payload };
        case SET_LIST_REGISTRY:
            return { ...state, list: action.payload };
        case IS_GET_REQUEST:
            return { ...state, isGetRequest: action.status };
        case IS_FETCHING:
            return { ...state, isFetching: action.status };
        case SET_TOTAL_COUNT:
            return { ...state, totalCount: action.count };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.current };
        case IS_SEND:
            return { ...state, isSend: action.status };
        case SEARCH:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};

export default registryReducer;