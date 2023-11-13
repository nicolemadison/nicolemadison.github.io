import { Link } from "react-router-dom";
import annewhite  from "../static/images/annewhite.png"
export default function Footer(){
    return(
        <>
            <div className="container-fluid text-center d-none d-sm-block footer" style={{backgroundColor:"#2A3439", color:"#fff", fontFamily: 'Kanit'}}>
                <div className="row">
                    <div className="col-5 d-flex ">
                        <div className="p-3">
                        <Link className="navbar-brand" to="/"><img src={annewhite} className="float-start" style={{height:"50px"}} alt="logo"/></Link>
                        </div>
                        <div className="p-3 text-start">
                            <h5>Acknowledgements:</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <p>Best Cat</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="p-3 text-start">
                            <h5>Site Links</h5>
                            <ul className="list-unstyled" style={{color:"#fff"}}>
                                <li className="mb-2 "><a href="/projects"  style={{textDecoration: "none"}}>Projects</a></li>
                                <li className="mb-2 "><a href="/contact"  style={{textDecoration: "none"}}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="p-3 text-start">
                            <h5>Contact Me</h5>
                            <ul className="list-unstyled">
                                <p className="mx-2"><i className="bi bi-envelope-at" ></i> nicmdsn@gmail.com</p>
                                <a className="mx-2" href="https://github.com/nicolemadison" target="_blank" rel="noreferrer" style={{textDecoration:"none"}}><i className="bi bi-github" style={{color: "#fff;"}}></i> nicolemadison</a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <hr style={{color:"#fff;"}}/>
                    <p className="mx-auto">This website is managed by anne.</p>
                </div>
            </div>
        </>
    );
}