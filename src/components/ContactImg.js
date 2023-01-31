import contact from "../images/contact.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactImg = () => {
    return (
        <div
        >
            <img src={contact} alt="a purple telephone on a purple stool" height={785} width={513} className="img-fluid Contact" />
        </div>    
    );
};

export default ContactImg;