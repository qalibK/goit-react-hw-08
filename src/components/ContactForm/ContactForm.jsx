import { Formik, Field, Form } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.info}>
          <label htmlFor="name"> Name</label>
          <Field type="text" name="name" />
          <label htmlFor="number">Number</label>
          <Field type="tel" name="number" />
        </div>
        <button className={css.add_button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
