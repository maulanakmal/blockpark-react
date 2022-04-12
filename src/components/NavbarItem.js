import { Link } from "react-router-dom";
import "./NavbarItem.css";

export default function NavbarItem(props) {
  return (
    <div className="NavbarItem">
      <Link to={props.link}>{props.name}</Link>
    </div>
  );
}
