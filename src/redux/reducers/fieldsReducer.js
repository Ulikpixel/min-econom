export const SET_SELECT = "SET_SELECT";
export const SET_SORT   = "SET_SORT";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
    select: {
        region: [],
        organ: [],
        economic: [],
        cause: [],
    },
    sort: {},
    isFetching: false,
};

const fieldsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT:
            return { ...state, sort: action.payload };
        case SET_SELECT:
            return { ...state, select: action.payload };
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.status };
        default:
            return state;
    };
};

export default fieldsReducer;