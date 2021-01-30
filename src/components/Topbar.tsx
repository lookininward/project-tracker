import SVG_Sidebar from './svg/SVG_Sidebar';

interface Props {
  toggleSidebar: () => void
}

function Topbar(props: Props) {
  return (
    <div className="topbar">
      <SVG_Sidebar toggleSidebar={props.toggleSidebar} />
      <span className="brand-header">
        Project Tracker
      </span>
    </div>
  )
}

export default Topbar;