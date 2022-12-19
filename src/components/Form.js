import React from "react";

const Form = () => {
    return (
        <div className="formPage">
            <h1>Contact Me</h1>
            <form className="myForm">
                <label for="name">Your Name</label>
                <input type="text" id="name" required></input>
                <label for="email">Your Email</label>
                <input type="email" id="email" required></input>
                <label for="message">Your Message</label>
                <textarea name="message" id="message" class="message-box" cols="30" rows="10" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;