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

    return (
        <div className="formPage">
            <h1>Contact Me</h1>
            <form className="myForm">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required></input>
                <label htmlFor="email">Your Email</label>
                <input type="text" name="name" value={email} onChange={handleInput} required />
                <p style={{ color: "red"}}>{error && error}</p>
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" class="message-box" cols="30" rows="5" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


/*const Form = () => {
    return (
        <div className="formPage">
            <h1>Contact Me</h1>
            <form className="myForm">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required></input>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required></input>
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" class="message-box" cols="30" rows="10" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}*/

export default Form;