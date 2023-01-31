import education from "../images/education.png";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationImg = () => {
    return (
        <div
        >
            <img src={education} alt="A blue cup of coffee on an empty table" height={377} width={568} className="img-fluid Education" />
        </div>    
    );
};

export default EducationImg; 