import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { TOGGLE_SIDEBAR } from '../actions';

const sidebar = (state = { isOpenSideBar: false }, action: any) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        isOpenSideBar: !state.isOpenSideBar
      }
    }
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  sidebar,
});
