import { useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function UserMenu() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.box}>
      <p className={css.text}>Welcome {user.name}</p>
      <button type="button" className={css.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
