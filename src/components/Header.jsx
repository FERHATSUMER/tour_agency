import "./components.css";
import { ReactComponent as Menu } from "./../assets/menu.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-menu">Gmail</div>
      <div classnName="header-menu" >Images</div>
      <div className="menu">
        <Menu />{" "}
      </div>
      <div className="avatar">F</div>
    </div>
  );
}
