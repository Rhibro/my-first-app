//import { Link } from "react-router-dom";
import PortfolioImg from "./PortfolioImg";
import EducationImg from "./EducationImg";
import AboutImg from "./AboutImg";
import ContactImg from "./ContactImg";
import Button  from "./Button";


const Home = () => {
    return (
    <div className="containerHome">
        <h1 className="myName">Rhiannon Brönnimann</h1>
        <p className="myTitle">Front End Developer</p>
        <div className="imgBox">
        <Button className="grouping">
            <AboutImg />
            <p className="imgTitle">about me</p>
        </Button>
        <Button className="grouping">
            <EducationImg />
            <p className="imgTitle">education</p>
        </Button>
        <Button className="grouping">
            <PortfolioImg />
            <p className="imgTitle">portfolio</p>
        </Button>
        <Button className="grouping">
            <ContactImg />
            <p className="imgTitle">contact</p>
        </Button>
        </div>
    </div>
    );
};

export default Home;