import circle from "../images/circle.png";

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
            <img src={circle} alt="Me smiling" height={400} width={400}/>
        </div>    
    );
};

export default ImageDisplay; 