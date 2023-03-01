import contact from "../images/chat.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactImg = () => {
    return (
        <div
        >
            <img src={contact} alt="a speech bubble" height={230} width={230} className="img-fluid Contact" />
        </div>    
    );
};

export default ContactImg;