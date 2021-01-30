import './Topbar.scss';
import SVGSideBar from './svg/Sidebar';

interface Props {
  toggleSidebar: () => void
}

function Topbar(props: Props) {
  return (
    <div className="topbar">
      <SVGSideBar toggleSidebar={props.toggleSidebar} />
      <span className="brand-header">
        Project Tracker
      </span>
    </div>
  )
}

export default Topbar;