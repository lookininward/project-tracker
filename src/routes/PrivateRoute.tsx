import {
  Route,
  Redirect,
} from "react-router-dom";
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const Home = ({ children, ...remainingProps }: any) => {
  const auth = useSelector((state: any) => state.firebase.auth);

  return (
    <Route
      {...remainingProps}
      render={({ location }: any) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
      }
    />
  );

}

export default Home;