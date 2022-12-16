import React from "react";

const Form = () => {
    return (
        <div className="formPage">
            <h1>Contact Me</h1>
            <form className="myForm">
                <label>Your Name</label>
                <input></input>
                <label>Your Email</label>
                <input></input>
                <label>Your Message</label>
                <input></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Form;