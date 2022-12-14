import AboutImageOne from "./AboutImageOne";
import AboutImageTwo from "./AboutImageTwo";

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div className="aboutMe">
                <p>I love to travel. Learning about new cultures, trying new things, meeting new people
                     that's my jam. I hope to continue to travel while perhaps working remotely.</p>
                <p>I love yoga. I used to dance professionally but I find yoga a lot more sustainable for my body and overall well being. </p>              
            </div>
            <div className="imageBox">
            <AboutImageOne />
            <AboutImageTwo />
            </div>
        </div>
        );
    };
    
    export default About;