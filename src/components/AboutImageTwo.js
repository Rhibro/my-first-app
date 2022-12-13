import headstand from "../images/headstand .jpg";

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
            <img src={headstand} alt="Me doing a headstand" height={500} width={400}/>
        </div> 
    );
};

export default AboutImageTwo; 