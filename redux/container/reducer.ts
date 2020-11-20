/* eslint-disable @typescript-eslint/no-explicit-any */
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction } from 'redux';

const initialState = {
  sidebarShow: 'responsive',
};

const changeState = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
    case 'set':
      return { ...state, ...action };

    default:
      return state;
  }
};

export default changeState;
