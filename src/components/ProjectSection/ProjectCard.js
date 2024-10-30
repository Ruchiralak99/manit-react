
import { Link } from "react-router-dom";
import Picon from "../../images/project/icon-arrow.svg"
import Picon1 from "../../images/project/icon-bg.svg"
const ProjectCard = ({ Pimg, Psubtitle, Ptitle, Pslug }) => {
    const ClickHandlar = () => {
        window.scrollTo(10, 0);
    }
    return(
        <div className="project-card">
            <div className="image">
                <img src={Pimg} alt="" />
            </div>
            <div className="content">
                <span>{Psubtitle}</span>
                <h2>{Ptitle}</h2>
                <Link onClick={ClickHandlar} to={`/project-single/${Pslug}`} className="project-link">
                    <div className="icon">
                        <img src={Picon} alt="" />
                    </div>
                    <div className="shape">
                        <img src={Picon1} alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;