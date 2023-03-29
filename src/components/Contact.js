//import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactImg from "./ContactImg";
import Form  from "./Form";

const Contact = () => {
    

        return (
            <div className="contactBody">
                <Link className="homeLink" to="/">
                 <div className="contactTitleBox">
                    <ContactImg />
                    <h1 className="contact">contact</h1>
                </div>
                </Link>
                <Form />
            </div>
        );
    }

    export default Contact;

    /* 
    
    const [status, setStatus] = useState(false);
    {status && (
                <Modal closeModal={() => setStatus(false)}>
                    <p className="ringMe">Ring me Monday-Wednesday 9-13</p>
                </Modal>
              )} 
                <div className="conatinerContact">
                    <button onClick={() => setStatus(true)}>Book a Call</button>
                </div>

    
    */