import './Sidebar.scss';

interface Props {
  isOpenSideBar: Boolean
}

function Sidebar(props: Props) {
  const { isOpenSideBar } = props;
  return (
    <nav id="sidebar" className={`sidebar ${isOpenSideBar && 'active p-2' }`}>
      {
        isOpenSideBar &&
        <div>
          <div className="sidebar-brand">
            <span className="brand-header">
              Project Tracker
            </span>
          </div>
          <ul className="list-unstyled text-start">
            <li>Home</li>
            <li>Tickets</li>
            <li>Projects</li>
            <li>Users</li>
            <li>Account</li>
            <li>About</li>
          </ul>
        </div>}
    </nav>
  )
}

export default Sidebar;