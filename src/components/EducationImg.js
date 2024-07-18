import education from "../images/notebook.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationImg = () => {
    return (
        <div>
            <img src={education} alt="a notebook" height={230} width={230} className="img-fluid Education" />
        </div>    
    );
};

export default EducationImg; 