//import React, { useState } from "react";
//import Modal from "./Modal";
//import Form from "./Form";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactImg from "./ContactImg";
import { Link } from "react-router-dom";

const Contact = () => {
    

        return (
            <div className="contactBody">
                 <div className="contactTitleBox">
                    <ContactImg />
                    <h1 className="contact">contact</h1>
                </div>
                <p>Hi</p>
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