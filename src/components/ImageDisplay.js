import circle from "../images/circle.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageDisplay = () => {
    return (
        <div 
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "1rem",
            }}
        >
            <img src={circle} alt="Me smiling" height={400} width={400} className="img-fluid" />
        </div>    
    );
};

export default ImageDisplay; 