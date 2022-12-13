import camel from "../images/camel.JPG";

const AboutImageOne = () => {
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
            <img src={camel} alt="Me beside a camel in the desert" height={600} width={400}/>
        </div> 
    );
};

export default AboutImageOne; 