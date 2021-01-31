import './Sidebar.scss';
import { Link } from "react-router-dom";

interface Props {
  isOpenSideBar: Boolean
}

function Sidebar(props: Props) {
  const { isOpenSideBar } = props;
  return (
    <nav data-testid="sidebar" className={`sidebar ${isOpenSideBar && 'active p-2'}`}>
      {
        isOpenSideBar &&
        <div data-testid="sidebar-content">
          <div className="sidebar-brand">
            <span>
              Project Tracker
            </span>
          </div>
          <ul className="list-unstyled text-start">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>Tickets</li>
            <li>Projects</li>
            <li>
            <Link to="/users">Users</Link>
            </li>
            <li>Account</li>
            <li>About</li>
          </ul>
        </div>}
    </nav>
  )
}

export default Sidebar;