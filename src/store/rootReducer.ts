import {combineReducers} from 'redux';
import {IVisitorState, visitorsCountReducer} from './visitorsCount/reducer';

export interface IAppState {
    visitors: IVisitorState;
}

export const initialState = {
    visitors: visitorsCountReducer,
};

const RootReducer = combineReducers(initialState);

export default RootReducer;
