import React from "react";
import { useState } from "react";

function Form() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleInput = (e) => {
        const value = e.target.value;
        setEmail(e.target.value);
        if (email !== ""(value)) {
            setError("Invaild Email");
        } else {
            setError("");
        }
    };

    const submitHandler = (event) => {
        event("Successfully submitted!");
    };

    return (
        <div className="formPage">
            <h1>Contact Me</h1>
            <form onSubmit={submitHandler} className="myForm">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" required></input>

                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" value={email} onChange={handleInput} required />
                <p style={{ color: "red"}}>{error && error}</p>
                
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" class="message-box" cols="30" rows="5" required></textarea>
               
                <button type="submit" className="formBtn">Submit</button>
            </form>
        </div>
    )
}

export default Form;