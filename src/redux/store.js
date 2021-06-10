import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { registryReducer, authReducer, fieldsReducer, statisticsReducer } from "./reducers";

const reducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    registry: registryReducer,
    fields: fieldsReducer,
    statistics: statisticsReducer,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
