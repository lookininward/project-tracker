import { constants } from 'react-redux-firebase'
import firebase from 'firebase/app';

export const signOut = () => (dispatch: any, getState: any) => {
  firebase.auth().signOut().then(() => {
    return dispatch({
      type: constants.actionTypes.LOGOUT
    })
  })
};