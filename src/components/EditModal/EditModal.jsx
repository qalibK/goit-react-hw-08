import css from "./EditModal.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { editContact } from "../../redux/contacts/operations";

export default function ContactModal({ onConfirm, contact }) {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (!values.name || !values.number) {
      alert("Please fill out all fields");
      return;
    }

    const updatedContact = { id: contact.id, ...values };

    dispatch(editContact(updatedContact))
      .then((result) => {
        if (result.type === editContact.fulfilled.type) {
          onConfirm(updatedContact);
          actions.resetForm();
        } else {
          console.error("Failed to update contact", result);
          alert(`Error: ${result.payload}`);
        }
      })
      .catch((error) => {
        console.error("Error updating contact", error);
        alert(`Unexpected error: ${error.message}`);
      });
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <Formik
          initialValues={{ name: contact.name, number: contact.number }}
          onSubmit={handleSubmit}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <label htmlFor="number">Number</label>
            <Field type="tel" name="number" />

            <button className={css.button} type="submit">
              Confirm
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
