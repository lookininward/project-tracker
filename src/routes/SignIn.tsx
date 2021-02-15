import './SignIn.scss';
import { useFirebase } from 'react-redux-firebase';
import { useHistory, Redirect, } from 'react-router-dom';
import { isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { ReactComponent as IconJS } from '../assets/icons/ico-javascript.svg';
import { ReactComponent as IconTS } from '../assets/icons/ico-typescript.svg';
import { ReactComponent as IconReact } from '../assets/icons/ico-react.svg';
import { ReactComponent as IconRedux } from '../assets/icons/ico-redux.svg';
import { ReactComponent as IconFirebase } from '../assets/icons/ico-firebase.svg';
import { ReactComponent as IconGoogle } from '../assets/icons/ico-google.svg';
import { ReactComponent as IconGithub } from '../assets/icons/ico-github.svg';
import { ReactComponent as IconLinkedIn } from '../assets/icons/ico-linkedin.svg';

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
    isEmpty(auth) ?
      <div className="signin p-4 d-flex flex-column align-items-center justify-content-center">
        <div className="card p-5 mb-5">
          <h1 className="display-4 mb-4">
            Project Tracker Demo
          </h1>

          <div className="signin__stack mb-4">
            <IconJS />
            <IconTS />
            <IconReact />
            <IconRedux />
            <IconFirebase />
          </div>

          <p className="signin__description mb-4">
            A demo project management app built with JavaScript,
            TypeScript, React, Redux, and Firebase to manage
            project tasks using the KANBAN methodology (2021). Vinoth Michael Xavier.
          </p>

          <button
            data-testid="signInWithGoogle"
            className="btn btn-primary mb-5 d-flex align-items-center"
            onClick={(event) => {
              event.preventDefault();
              signInWithGoogle();
            }}
          >
            <IconGoogle className="ico-google" /> Sign In with Google
          </button>

          <div className="signin__contact d-flex justify-content-center">
            <IconGithub
              className="me-3"
              onClick={() => window.open("https://github.com/lookininward", "_blank")}
            />
            <IconLinkedIn
              onClick={() => window.open("https://www.linkedin.com/in/vinothmichaelxavier/", "_blank")}
            />
          </div>
        </div>
      </div>
      :
      <Redirect to="/home/workflow" />
  );
}

export default SignIn;