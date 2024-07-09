import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.contact}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
