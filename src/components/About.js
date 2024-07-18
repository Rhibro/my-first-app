import "bootstrap/dist/css/bootstrap.min.css";
//import Button from "./Button";
import AboutImg from "./AboutImg";
import circle from "../images/circle.png"
import { Link } from "react-router-dom";

const About = () => {

    return (
        <div className="aboutBody">
            <Link className="homeLink" to="/">
            <div className="aboutTitleBox">
                <AboutImg />
                <h1 className="aboutMe">about me</h1>
            </div>
            </Link>
            <div className="aboutInfoBox">
                <img className="myFace" src={circle} alt="a head shot of my face smiling"></img>
                <p className="aboutInfo">
                Born and raised in Canada I now call Sweden home.
                I am currently a student at Chas Academy studying Fullstack-Development. The course 
                is two years with the goal of proficiency in web development with a particular focus on Javascript,
                and Typescript. I have a special interest in accessible design because I feel the whole purpose of 
                technology is to make the world as accessible as possible for everyone. I’m looking for opportunities
                where I can learn and develop new skills.    
                </p>
            </div>
        </div>
        );
    };
    
    export default About;