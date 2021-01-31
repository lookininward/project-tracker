import { useSelector } from 'react-redux';

function Account() {
  const profile = useSelector((state: any) => state.firebase.profile);
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
            <img src={profile.avatarUrl} />
            <div>{profile.displayName}</div>
            <div>{profile.email}</div>
            <button className="btn btn-danger">Sign Out</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Account;