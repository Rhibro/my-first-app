import React from "react";
import { useState } from "react";

function Form() {
    const [person, setPerson] = useState({
        fullName: "",
        email: "",
        message: "",
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleInput = (e) => {
        const fullName = e.target.fullName;
        const value = e.target.value;

        setPerson({...person, [fullName]: value});

    };

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (person.fullName && person.email && person.message === "") {
            setError("All fields are required!");
        } else {
            setError("");
        }
        console.log(person);

        const newMessage = {...person.message};
        setMessage(...message, newMessage);

        setPerson({
            fullName: "",
            email: "",
            message: "",
        })
    };

    return (
        <div className="formPage">

            <form onSubmit={submitHandler} className="myForm">
                

                <label htmlFor="email">email:</label>
                <input 
                    type="text" 
                    name="email" 
                    value={person.email} 
                    onChange={handleInput} 
                    required 
                />
                <p style={{ color: "red"}}>{error && error}</p>
                
                <label htmlFor="message">message:</label>
                <textarea 
                name="message" 
                id="message" 
                className="message-box" 
                cols="20" 
                rows="5" 
                value={person.message}
                onChange={handleInput}
                required>
                </textarea>
               
                <button type="submit" className="formBtn">
                    submit
                </button>
               {message.localeCompare((msg) => {
                const {email, message} = msg;
                return (
                    <div>
                        <p>{email}</p>
                        <p>{message}</p>
                    </div>
                );
               })}
            </form>
        </div>
    )
}

export default Form;