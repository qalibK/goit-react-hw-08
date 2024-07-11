import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";
import { MdContactPhone } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AppBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      <Link to="/contacts" className={css.link}>
        <MdContactPhone className={css.icon} />
      </Link>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
