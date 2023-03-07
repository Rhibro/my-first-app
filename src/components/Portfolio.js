import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioImg from "./PortfolioImg";
import { Link } from "react-router-dom";
import spaceGarden from "../images/space-garden.png";
import gen from "../images/gen.png";
import bhro from "../images/bhro.png";

const Portfolio = () => {
    return (
        <div className="portBody">
            <div className="portTitleBox">
                <PortfolioImg />
                <h1 className="portfolio">portfolio</h1>
            </div>
            <div className="portInfoBox">
               <div className="portBox">
                <div>
                    <Link to="/bhro">
                        <img className="webEx" src={bhro}></img>
                    </Link>
                </div>
                    <h1 className="porjectName">
                            12-hour-test
                    </h1>
                    <p className="portInfo">
                        This web page was an exercise to build 
                        a completely responsive web-page down to 
                        the smallest screen size of 320px.
                    </p>
               </div>
               <div className="portBox">
                <div>
                    <Link to="/gen">
                        <img className="webEx" src={gen}></img>
                    </Link>
                </div>
                    <h1 className="porjectName">
                            genesis-design
                    </h1>
                    <p className="portInfo">
                        This is a multiple page website where I’ve utilized Flexbox 
                        and CSS Grid to organize the unique layout (looks best at 
                        1200px or higher).
                    </p>
               </div>
               <div className="portBox">
                <div>
                    <Link to="/">
                        <img className="webEx" src={spaceGarden}></img>
                    </Link>
                </div>
                    <h1 className="porjectName">
                            space-theme
                    </h1>
                    <p className="portInfo">
                        As a group we were given the challenge of creating a
                        website based on a word “space” and a HEX colour code.
                    </p>
               </div>
            </div>
        </div>
        );
    };
    
    export default Portfolio;