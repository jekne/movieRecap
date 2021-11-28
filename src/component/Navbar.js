import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
        <strong>| ABOUT PAGE |</strong>
      </NavLink>
      <NavLink to="/">
        <strong>| HOME PAGE |</strong>
      </NavLink>
      <NavLink to="/discover">
        <strong>| DISCOVER MOVIES |</strong>
      </NavLink>
    </div>
  );
}
