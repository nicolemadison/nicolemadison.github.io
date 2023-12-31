import { Link } from "react-router-dom";
import annewhite  from "../static/images/annewhite.png"
function Navbar() {
    // const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor:"#000"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={annewhite} className="rounded float-start" style={{height:"50px"}} alt=""/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" style={{flexGrow:'0'}} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;