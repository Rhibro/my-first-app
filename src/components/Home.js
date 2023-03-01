import { Link } from "react-router-dom";
import PortfolioImg from "./PortfolioImg";
import EducationImg from "./EducationImg";
import AboutImg from "./AboutImg";
import ContactImg from "./ContactImg";
import Button  from "./Button";
//import About from "./About";


const Home = () => {
    return (
    <div className="containerHome">
        <h1 className="myName">Rhiannon Brönnimann</h1>
        <p className="myTitle">Front End Developer</p>
        <div className="imgBox">
            <Link to="/About">
                <Button className="grouping">
                    <AboutImg />
                    <p className="imgTitle">about me</p>
                </Button>
            </Link>
            <Link to="/Education">
                <Button className="grouping">
                    <EducationImg />
                    <p className="imgTitle">education</p>
                </Button>
            </Link>
            <Link to="/Portfolio">
                <Button className="grouping">
                    <PortfolioImg />
                    <p className="imgTitle">portfolio</p>
                </Button>
            </Link>
            <Link path="/Contact">
                <Button className="grouping">
                    <ContactImg />
                    <p className="imgTitle">contact</p>
                </Button>
            </Link>
        </div>
    </div>
    );
};

export default Home;