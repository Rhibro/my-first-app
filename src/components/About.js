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
                Born and raised in Toronto, Canada I now call Malmö, Sweden home.
                I am a recent graduate from Sundsgården Folkhögskolas I.T Tech for Women Program. 
                The program has not only given me an in-depth understanding of CSS, HTML, JavaScript,
                 and React but has also taught me how vital it is to work in groups. I have a special 
                 interest in accessible design because I feel the whole purpose of technology is to 
                 make the world as accessible as possible for everyone. I’m looking for opportunities
                  where I can learn and develop new skills (i.e Full-stack, UI/UX).    
                </p>
            </div>
        </div>
        );
    };
    
    export default About;