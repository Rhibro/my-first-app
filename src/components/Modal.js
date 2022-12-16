import { MdClose } from "react-icons/md";

const Modal = ({closeModal, children}) => {
    return (
    <div className="overlay">
        <div className="content">
            <MdClose onClick={closeModal} />
            {children}
        </div>
    </div>
    );
};

export default Modal;