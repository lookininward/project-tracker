import { Link } from "react-router-dom";
import './Topbar.scss';
import SVGSideBar from './svg/Sidebar';

interface Props {
  toggleSidebar: () => void
}

function Topbar(props: Props) {
  return (
    <div className="topbar">
      <div>
        <SVGSideBar onClick={props.toggleSidebar} />
        <span data-testid="topbar-header">
          Project Tracker
        </span>
      </div>

      <div className="d-flex">
        <button type="button" className="btn btn-primary btn-sm me-4 d-flex">Create Ticket</button>
        <input type="text" id="inputPassword5" className="form-control form-control-sm me-4" />
        <select className="form-select form-select-sm me-4" aria-label="Select Project">
          <option defaultValue="All Projects">All Projects</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <div className="">
          <input type="date" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />
          {/* https://hypeserver.github.io/react-date-range/ */}
        </div>
      </div>

      <div className="d-flex">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell me-4" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
          <Link data-testid="account" to="/home/account">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Topbar;