import { useGlobalContext } from "../Context/Context";
const Modal = () => {
  const { modal, closeModal, correct, questions } = useGlobalContext();
  return (
    <div className={`${modal ? "modal-container isOpen" : "modal-container"}`}>
      <div className="modal-content">
        <h2>Congrats</h2>
        <p>You answered {((correct / questions.length) * 100).toFixed(0)}%</p>
        <button className="close-btn" onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};
export default Modal;
