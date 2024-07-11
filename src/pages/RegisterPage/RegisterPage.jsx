import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";
export default function RegisterPage() {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Register --></h1>
      <RegistrationForm />
    </div>
  );
}
