import yoga from "../images/yoga.jpg";

const AboutImageTwo = () => {
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
            <img src={yoga} alt="Me doing a headstand" height={600} width={400}/>
        </div> 
    );
};

export default AboutImageTwo; 