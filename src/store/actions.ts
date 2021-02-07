import { constants } from 'react-redux-firebase'
import firebase from 'firebase/app';

export const signOut = () => (dispatch: any, getState: any) => {
  firebase.auth().signOut().then(() => {
    return dispatch({
      type: constants.actionTypes.LOGOUT
    })
  })
};

export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const toggleSidebar = (dispatch: any) => dispatch({ type: TOGGLE_SIDEBAR });



export const CREATE_TICKET = 'CREATE_TICKET';
export const createTicket = (dispatch: any) => dispatch({ type: CREATE_TICKET });
