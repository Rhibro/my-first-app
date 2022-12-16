import React, { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";

export default function Contact() {
    const [status, setStatus] = useState(false);

        return (
            <div className="contactLayout">
              <Form />
              {status && (
                <Modal closeModal={() => setStatus(false)}>
                    <p>Ring me Monday-Wednesday 9-13</p>
                </Modal>
              )} 
                <div className="conatinerContact">
                    <button onClick={() => setStatus(true)}>Book a Call</button>
                </div>
            </div>
        );
    }

