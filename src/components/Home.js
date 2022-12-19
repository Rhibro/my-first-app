import { Link } from "react-router-dom";
import ImageDisplay from "./ImageDisplay";
import Button from "./Button";


const Home = () => {
    return (
    <div className="containerHome">
        <h1>Rhiannon Brönnimann</h1>
        <p>I'm a Front End Developer based in Malmö, Sweden</p>
        <ImageDisplay />
        <Link to="/about"><Button>Want to know more?</Button></Link>
    </div>
    );
};

export default Home;