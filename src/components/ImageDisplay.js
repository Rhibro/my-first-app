import portfolio from "../images/portfolio.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageDisplay = () => {
    return (
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
               
            }}
        >
            <img src={portfolio} alt="Two people playing on a blue tennis court" height={408} width={995} className="img-fluid" />
        </div>    
    );
};

export default ImageDisplay; 