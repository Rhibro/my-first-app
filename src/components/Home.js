//import { Link } from "react-router-dom";
import PortfolioImg from "./PortfolioImg";
import EducationImg from "./EducationImg";
import AboutImg from "./AboutImg";
import ContactImg from "./ContactImg";

const Home = () => {
    return (
    <div className="containerHome">
        <h1 className="myName">Rhiannon Brönnimann</h1>
        <p className="myTitle">Front End Developer</p>
        <div className="imgBox">
        <AboutImg className="About" />
        <PortfolioImg className="Portfolio" />
        <ContactImg className="Contact" />
        <EducationImg className="Education" />
        </div>
    </div>
    );
};

export default Home;