//import Header from "./Header";
//import Footer from "./Footer";
import ImageDisplay from "./ImageDisplay";
import Button from "./Button";


const Home = () => {
    return (
    <div className="containerHome">
        <h1>Rhiannon Brönnimann</h1>
        <p>I'm a Front End Developer based in Malmö, Sweden</p>
        <ImageDisplay />
        <Button>Want to know more?</Button>
    </div>
    );
};

export default Home;