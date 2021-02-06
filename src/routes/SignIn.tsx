import { useFirebase } from 'react-redux-firebase';
import { useHistory, Redirect, } from 'react-router-dom';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase.login({
      provider: "google",
      type: "popup",
    }).then(() => {
      history.push('/home/workflow');
    });
  }

  const auth = useSelector((state: any) => state.firebase.auth);

  return (
    isEmpty(auth) ? <div className="p-4 d-flex flex-column align-items-center">
      <h1 className="display-4 mb-5">
        Project Tracker
      </h1>
      <div className="card p-4">
        <h2 className="display-6 mb-3">Sign In</h2>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            signInWithGoogle();
          }}
        >
          Sign In with Google
      </button>
      </div>
    </div> :
    <Redirect to="/home/workflow" />
  );
}

export default SignIn;