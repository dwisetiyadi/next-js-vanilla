import LoadReducers from '@config/redux/reducer';
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';

const reduxReducer = combineReducers(LoadReducers);

// eslint-disable-next-line
const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState;
  }
  return reduxReducer(state, action);
};

export default rootReducer;
