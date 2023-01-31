import portfolio from "../images/portfolio.png";
import "bootstrap/dist/css/bootstrap.min.css";

const PortfolioImg = () => {
    return (
        <div> 
            <img src={portfolio} alt="Two people playing on a blue tennis court" height={428} width={1015} className="img-fluid Portfolio" />
        </div>    
    );
};

export default PortfolioImg; 