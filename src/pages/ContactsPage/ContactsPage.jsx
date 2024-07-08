import ContactForm from "../../components/ContactForm/ContactForm";
import css from "./ContactsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import ContactList from "../../components/ContactList/ContactList";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.box}>
      <h1>ContactsPage</h1>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </div>
  );
}