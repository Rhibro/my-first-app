import portfolio from "../images/case.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const PortfolioImg = () => {
    return (
        <div> 
            <img src={portfolio} alt="a brifecase" height={230} width={230} className="img-fluid Portfolio" />
        </div>    
    );
};

export default PortfolioImg; 