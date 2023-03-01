import "bootstrap/dist/css/bootstrap.min.css";
//import Button from "./Button";
import AboutImg from "./AboutImg";
import circle from "../images/circle.png"

const About = () => {
    return (
        <div className="aboutBody">
            <div className="aboutTitleBox">
                <AboutImg />
                <h1 className="aboutMe">about me</h1>
            </div>
            <div className="aboutInfoBox">
                <img className="myFace" src={circle}></img>
                <p className="aboutInfo">
                    Born and raised in Toronto, Canada I now call Malmö, Sweden home.
                    If the future is tech then I want to make that future as accessible as possible for all.
                </p>
            </div>
        </div>
        );
    };
    
    export default About;