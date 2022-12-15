import camel from "../images/camel.JPG"
import yoga from "../images/yoga.jpg"

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div className="aboutMe">
                <p className="pOne">I love to travel. Learning about new cultures, trying new things, meeting new people
                     that's my jam. I hope to continue to travel while perhaps working remotely.</p>
                <p className="pTwo">I love yoga. I used to dance professionally but I find yoga a lot more sustainable for my body and overall well being. </p>              
            </div>
            <div className="imageBox">
                <img src={camel} alt="Me beside a camel in the desert"></img>
                <img src={yoga} alt="Me doing yoga"></img>
            </div>
        </div>
        );
    };
    
    export default About;