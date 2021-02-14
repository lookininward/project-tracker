import { useSelector, useDispatch } from 'react-redux';
import { signOut } from 'store/actions';


function Account() {
  const profile = useSelector((state: any) => state.firebase.profile);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOut());
  }

  return (
    <div className="p-4">
      <div className="card p-4 mb-3">
        <div className="card-title text-start">
          <h2 className="display-6">Account</h2>
          <p className="lead text-muted">Manage your account settings.</p>
        </div>
      </div>

      <div className="card p-4">
        <div className="card-title text-start">

          <div className="d-flex flex-column align-items-start">
            <img src={profile.avatarUrl} alt="user-avatar"/>
            <div>{profile.displayName}</div>
            <div>{profile.email}</div>
            <button onClick={handleClick} className="btn btn-danger">Sign Out</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Account;