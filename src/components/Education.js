import "bootstrap/dist/css/bootstrap.min.css";
//import Button from "./Button";
import EducationImg from "./EducationImg";
import { Link } from "react-router-dom";

const Education = () => {
    return (
        <div className="eduBody">
            <Link className="homeLink" to="/">
            <div className="eduTitleBox">
                <EducationImg />
                <h1 className="education">education</h1>
            </div>
            </Link>
            <div className="eduInfoBox">
               <div className="eduBox">
                    <h1 className="schoolName">
                            Sundsgården Folkhögskola
                    </h1>
                    <p className="timePlace">
                        Aug 2022 - Jan 2023 || Helsingborg, Sweden
                    </p>
                    <p className="eduInfo">
                        IT-Tech for Women is an intensive coding course. The program has a focus on 
                        practical skills as well as working in group settings. The program consists 
                        of: programing foundations, programming in depth, responsive web design, 
                        accessible web design, individual & group projects.
                    </p>
                   <div>
                        <Link to={{pathname:
                            "https://sundsgarden.se/utbildningar-kurser/langa-kurser/distanskurser/it-tech-for-women/"}}
                            target="_blank" className="schoolLink">
                            More Information
                        </Link>
                   </div>
               </div>
               <div className="eduBox">
                    <h1 className="schoolName">
                        Downward Dog Yoga Center
                    </h1>
                    <p className="timePlace">
                        Jan 2017 - May 2017 || Toronto, Canada
                    </p>
                    <p className="eduInfo">
                        An in depth understanding of yoga anatomy and how different positions can affect 
                        the body, History of Ashtanga practice, and adjustments. Must be able to give 
                        clear instructions to complex positions.
                    </p>
                    <div>
                        <Link to={{pathname:
                            "https://downwarddog.com/teacher-training/200hr-program-objectives/"}}
                            target="_blank" className="schoolLink">
                            More Information
                        </Link>
                    </div>
               </div>
               <div className="eduBox">
                    <h1 className="schoolName">
                        Humber College
                    </h1>
                    <p className="timePlace">
                        Sept 2011 - June 2014 || Toronto, Canada
                    </p>
                    <p className="eduInfo">
                        The Theatre Performance program is an interdisciplinary training with 
                        emphasis on physical movement, writing, collaborations with large 
                        ensembles, set design, and devised creation.
                    </p>
                    <div>
                   <Link to={{pathname:
                            "https://humber.ca/"}}
                            target="_blank" className="schoolLink">
                            More Information
                        </Link>
                   </div>
               </div>
            </div>
        </div>
        );
    };
    
    export default Education;

   