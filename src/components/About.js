import AboutImageOne from "./AboutImageOne";
import AboutImageTwo from "./AboutImageTwo";

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div style={{marginTop: "10px"}} className="aboutMe">
                <p>I love to travel</p>
                <p>I love yoga</p>              
            </div>
            <div className="imageBox">
            <AboutImageOne />
            <AboutImageTwo />
            </div>
        </div>
        );
    };
    
    export default About;