import React from 'react'
import "./Footer.css";
import wave6 from "../assets/media/wave6.svg";
import salesforceImg from "../assets/media/companies/Salesforce-Partner-300x89.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
        <img src={wave6} alt="section-break"/>
            <div className='container-fluid'>
                <div className='row d-flex'>
                    <div className='col pb-5' style={{backgroundColor:" #f9d019"}}>
                        <p className='mb-0 text-center' style={{fontWeight:"700" , color:"white", fontSize:"3rem"}}>
                            LET'S START SOMETHING NEW
                        </p>
                        <p className='text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"3rem"}}>
                            SAY HELLO!
                        </p>
                        <p className='text-center mb-5'  style={{lineHeight:"1.8" , color:"#4d5459", fontSize:"1.15rem"}}>
                            Tell us about the problem you need to fix and how we might help.
                        </p>
                        <form className='' style={{marginLeft:"20%", marginRight:"20%"}}>
                            <div className="mb-3">
                                <label htmlFor="InputFirstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="InputFirstName"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputLastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="InputLastName"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputEmail" className="form-label">Email Address</label>
                                <input type="email" className="form-control" id="InputEmail"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputCompany" className="form-label">Company</label>
                                <input type="text" className="form-control" id="InputCompany"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="InputMessage" className="form-label">Message</label>
                                <textarea type="text" rows="5" className="form-control" id="InputMessage"/>
                            </div>
                            <button type="submit" className="btn styled-button">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        <footer >
            <div className='container-fluid'>
                <div className='row d-flex flex-lg-row flex-column pt-5 mx-2 mb-5 mx-lg-5'>
                    <div className='col mx-2 mt-4'>
                        <h5>
                            About Ribbonfish
                        </h5>
                        <p>
                        Looking for a team with decades of experience to deliver bespoke applications and business tools to support your business?
                        </p>
                        <p>
                        Ribbonfish is the UK’s leading consultancy for Salesforce, cloud CRM, business technology, and rights management systems delivering the right technology for publishers, media companies and financial services.
                        </p>
                        <Link to="/about" style={{textDecoration:"none", color:"#fff", fontWeight:"600", fontSize:"0.9rem"}}>Find out more about our work.</Link>
                    </div>
                    
                    <div className='col mx-2 mt-4'>
                        <h5>
                            Success Stories
                        </h5>
                        <p>
                        We take pride in our ability to come up with innovative solutions to solve real business problems.
                        </p>
                        <Link to="/about" style={{textDecoration:"none",  color:"#fff", fontWeight:"600", fontSize:"0.9rem"}} alt="about">Check out our case studies.</Link>
                    </div>
                    <div className='col mx-2 mt-4'>
                        <h5>Contact Us</h5>
                        <p className='mb-0'>Ribbonfish</p>
                        <p className='mb-0'>35 New Broad St,</p>
                        <p className='mb-0'>London EC2M 1NH</p>
                        <p className='mb-0'>United Kingdom</p>
                        <p>contactus@ribbonfish.co.uk</p>

                        <img src={salesforceImg} className='mb-2' alt="partner"/>
                        <p>
                        <Link to="https://ribbonfish.co.uk/privacy-policy/" style={{textDecoration:"none",  color:"#fff", fontWeight:"400", fontStyle:"italic", fontSize:"0.9rem"}}>Privacy Notice</Link>
                        </p>
                    </div>
                </div>
                <div className='row d-flex flex-lg-row flex-column mx-2 mb-5'>
                    <div className='col mx-2 text-start text-lg-center'>
                        <h5>
                            News
                        </h5>
                        <ul>
                            <li><Link to="https://ribbonfish.co.uk/blog/invest-in-women-a-night-of-inspiration-at-the-wow-manila-soiree/" style={{textDecoration:"none", color:"#fff", fontSize:"0.9rem"}} >Invest in Women: A Night of Inspiration at the WOW Manila Soirée</Link></li>
                            <li><Link to="https://ribbonfish.co.uk/blog/elevating-technology-with-experience-cloud-dive-into-tech-playback-session/" style={{textDecoration:"none", color:"#fff",fontSize:"0.9rem"}} >Elevating Technology with Experience Cloud: Dive into Tech Playback Session</Link></li>
                            <li><Link to="https://ribbonfish.co.uk/blog/navigating-the-innovation-odyssey-dive-into-tech-playback-session/" style={{textDecoration:"none", color:"#fff",fontSize:"0.9rem"}} >Navigating the Innovation Odyssey: Dive into Tech Playback Session</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='row d-flex flex-md-row flex-column' style={{backgroundColor:"#000000"}}>
                <div className="d-flex my-1" >
                    <div className="my-auto" style={{fontSize:"0.9rem"}}>© Ribbonfish 2023. Registered in England and Wales, Company Number 6412108</div>
                    <div className="ms-auto p-2">
                        <Link to="https://www.linkedin.com/company/ribbonfish/"><i style={{fontSize:"1.3rem", verticalAlign:"center"}} className="bi bi-linkedin"></i></Link>
                        <span> </span>
                        <Link to="https://twitter.com/ribbonfishteam?lang=en"><i style={{fontSize:"1.3rem", verticalAlign:"center" }} className="bi bi-twitter"></i></Link>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer