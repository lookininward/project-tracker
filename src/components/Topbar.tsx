import './Topbar.scss';
import SVGSideBar from './svg/Sidebar';

interface Props {
  toggleSidebar: () => void
}

function Topbar(props: Props) {
  return (
    <div className="topbar">
      <SVGSideBar onClick={props.toggleSidebar} />
      <span data-testid="topbar-header">
        Project Tracker
      </span>
    </div>
  )
}

export default Topbar;