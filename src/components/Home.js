import { Link } from "react-router-dom";
import PortfolioImg from "./PortfolioImg";
import EducationImg from "./EducationImg";
import AboutImg from "./AboutImg";
import ContactImg from "./ContactImg";
import Button  from "./Button";
import { useState, useEffect } from "react";
import React from "react";


const Home = () => {

    const [color, changeColor] = useState("#FFFFFF");
    
    const click = color => {
        changeColor(color)
        }

    useEffect (() => {
        document.body.style.backgroundColor = color
    }, [color])

    return (
    <div className="containerHome" style={{ background: color }}>
        <h1 className="myName">Rhiannon Brönnimann</h1>
        <p className="myTitle">Front End Developer</p>
        <div className="imgBox">
            
            <Link to="/About" >
                <Button className="grouping" onClick={() => {click("#B8C843")}}>
                    <AboutImg />
                    <p className="imgTitle">about me</p>
                </Button>
            </Link>
            
            <Link to="/Education">
                <Button className="grouping" onClick={() => {click("#E24F32")}}>
                    <EducationImg />
                    <p className="imgTitle">education</p>
                </Button>
            </Link>
            
            <Link to="/Portfolio">
                <Button className="grouping" onClick={() => {click("#FFFAD5")}}>
                    <PortfolioImg />
                    <p className="imgTitle">portfolio</p>
                </Button>
            </Link>
            
            <Link to="/Contact">
                <Button className="grouping" onClick={() => {click("#F2E5CA")}}>
                    <ContactImg />
                    <p className="imgTitle">contact</p>
                </Button>
            </Link>
        </div>
    </div>
    );
};

export default Home;

/* 
#B8C843
"#E24F32"
"#FFFAD5"
"#F2E5CA"
*/