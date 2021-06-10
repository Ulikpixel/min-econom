import { SET_SORT, SET_SELECT, SET_IS_FETCHING } from "../reducers/fieldsReducer";
import { fieldsAPI } from "../../API";
import { changeSelect } from "../../utils";

// actions
const setSelect = (payload) => ({ type: SET_SELECT, payload });
const isFetching = (status) => ({ type: SET_IS_FETCHING, status });
export const setSort = (payload) => ({ type: SET_SORT, payload });

// thunks

export const getSelect = () => (dispatch) => {
    dispatch(isFetching(true));
    dispatch(isFetching(false));
    fieldsAPI.get().then(({ data }) => {
        const select = {
            cause: changeSelect(data.cause),
            region: changeSelect(data.region),
            organ: changeSelect(data.organ),
            economic: changeSelect(data.economic),
        };
        dispatch(setSelect(select));
    }).catch((err) => {
        dispatch(isFetching(false));
    });
};