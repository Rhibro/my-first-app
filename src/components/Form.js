import React from "react";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
//import { useState } from "react";
//import github from "../images/github.svg";
//import linked from "../images/linkedin.svg";

function Form() {

  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { email, message } = e.target.elements
    let conFom = {
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="myForm">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">
            email:
          </label>
          <input className="inPut" type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">
            message:
          </label>
          <textarea className="textArea" id="message" required />
        </div>
        <button className="formBtn" type="submit">
          {formStatus}
        </button>
        <div className="socialGroup">
          <a className="socialBtnOne" href="https://github.com/Rhibro" target="_blank" rel="noopener noreferrer">
            <img className="social" src={github} alt="github icon" ></img></a> 
          <a className="socialBtnTwo" href="https://www.linkedin.com/in/rhiannon-br%C3%B6nnimann-a1a888a0/" target="_blank" rel="noopener noreferrer">
          <img className="social" src={linkedin} alt="linkedin icon" ></img></a>
        </div>
      </form>
    </div>
  )
}


   /* const [person, setPerson] = useState({
        email: "",
        message: "",
    });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleInput = (e) => {
        const email = e.target.email;
        const value = e.target.value;

        setPerson({...person, [email]: value});

    };

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (person.email && person.message === "") {
            setError("All fields are required!");
        } else {
            setError("");
        }
        console.log(person);

        const newMessage = {...person.message};
        setMessage(...message, newMessage);

        setPerson({
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
                cols="30" 
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
                <div>
                
                </div>
            </form>
        </div>
    )*/


export default Form;

/* 
<FontAwesomeIcon icon="fa-brands fa-square-github" />
<FontAwesomeIcon icon="fa-brands fa-linkedin" />
*/