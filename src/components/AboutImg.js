import aboutme from "../images/game.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutImg = () => {
    return (
        <div
        >
            <img src={aboutme} alt="a game controller" height={230} width={230} className="img-fluid About" />
        </div>    
    );
};

export default AboutImg; 