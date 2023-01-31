//import { Link } from "react-router-dom";
import ImageDisplay from "./ImageDisplay";
import EducationImg from "./EducationImg";


const Home = () => {
    return (
    <div className="containerHome">
        <h1 className="myName">Rhiannon Brönnimann</h1>
        <p className="myTitle">Front End Developer</p>
        <EducationImg />
        <ImageDisplay />
        
    </div>
    );
};

export default Home;