import aboutme from "../images/aboutme.png";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutImg = () => {
    return (
        <div
        >
            <img src={aboutme} alt="a light pink flower on a dark pink background" height={377} width={427} className="img-fluid About" />
        </div>    
    );
};

export default AboutImg; 