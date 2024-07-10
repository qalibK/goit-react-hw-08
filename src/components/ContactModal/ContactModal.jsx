import css from "./ContactModal.module.css";

export default function ContactModal({ message, onCancel, onConfirm }) {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <p>{message}</p>
        <button onClick={onConfirm} className={css.confirmBtn}>
          Yes
        </button>
        <button onClick={onCancel} className={css.cancelBtn}>
          No
        </button>
      </div>
    </div>
  );
}
