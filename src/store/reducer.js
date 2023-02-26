import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const createReducer = (asyncReducers) =>
    combineReducers({
        customization: customizationReducer,
        ...asyncReducers
    });

export default createReducer;
