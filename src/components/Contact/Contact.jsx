import { IoPerson, IoCall } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import ContactModal from "../ContactModal/ContactModal";
import { useState } from "react";
import EditModal from "../EditModal/EditModal";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState(contact);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    dispatch(deleteContact(contact.id));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleConfirmEdit = (updatedContact) => {
    setCurrentContact(updatedContact);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className={css.left}>
        <div className={css.info}>
          <IoPerson />
          <p>{currentContact.name}</p>
        </div>
        <div className={css.info}>
          <IoCall />
          <p>{currentContact.number}</p>
        </div>
      </div>
      <button type="button" onClick={handleDelete} className={css.btn}>
        Delete
      </button>
      <button type="button" onClick={handleEdit} className={css.btn}>
        Edit
      </button>

      {isModalOpen && (
        <ContactModal
          message="Are you sure you want to delete this contact?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}

      {isEditModalOpen && (
        <EditModal contact={contact} onConfirm={handleConfirmEdit} />
      )}
    </>
  );
}
