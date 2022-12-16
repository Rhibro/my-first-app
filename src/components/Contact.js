import React, { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";

export default function Contact() {
    const [status, setStatus] = useState(false);

        return (
            <div>
              <Form />
              {status && (
                <Modal closeModal={() => setStatus(false)}>
                    <p>Hope you are enjoying your time!</p>
                </Modal>
              )} 
                <div className="conatinerContact">
                    <button onClick={() => setStatus(true)}>Open Modal</button>
                </div>
            </div>
        );
    }

