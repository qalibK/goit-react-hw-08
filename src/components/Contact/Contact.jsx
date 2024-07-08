import { IoPerson, IoCall } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div>
        <div>
          <IoPerson />
          <p>{contact.name}</p>
        </div>
        <div>
          <IoCall />
          <p>{contact.number}</p>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
