import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={css.box}>
      <h1>LoginPage</h1>

      <LoginForm />
    </div>
  );
}
