import React from 'react'
import { Link } from 'react-router-dom';
import wave from "../assets/media/wave.svg";
import wave2 from "../assets/media/wave2.svg";
import wave3 from "../assets/media/wave3.svg";
import wave4 from "../assets/media/wave4.svg";
import wave5 from "../assets/media/wave5.svg";
import Video from '../components/Video';
import {companies} from '../assets/media/companies/companies';
import img1 from '../assets/media/companies/1.png';
import img2 from '../assets/media/companies/SpringerNature.png';
import img3 from '../assets/media/companies/Macmillan-Learning-2.png';
import Clients from '../components/Clients';
const Homepage = () => {
    return (
        <>
            <main>
                <section className='container-fluid'>
                    <div className='row d-flex flex-lg-row flex-column'>
                        <div className='col' style={{backgroundColor:" #f9d019"}}>
                            <p className='mx-lg-5 mt-4 p-3 text-lg-start text-center' style={{fontWeight:"500" , color:"#222222", fontSize:"1.3rem"}}>
                                WE TURN YOUR VISION INTO REALITY
                                
                            </p>
                            <p className='mb-0 ms-lg-5 ps-lg-3 text-lg-start text-center' style={{fontWeight:"700" , color:"white", fontSize:"3rem"}}>
                                DREAM BIG,
                            </p>
                            <p className='ms-lg-5 ps-lg-3 text-lg-start text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"3rem"}}>
                                DELIVER BIGGER
                            </p>
                            <p className='d-flex justify-content-center mx-lg-5 ps-lg-3 pe-lg-5 px-5 text-lg-start text-center mb-5'  style={{lineHeight:"1.8" , color:"#222222", fontSize:"1.15rem"}}>
                                Do you struggle with manual processes? Our industry expertise and out-the-box thinking delivers innovative, flexible, and scalable solutions. We accelerate delivery using state-of-the-art platforms such as Salesforce, allowing businesses to focus more efficiently on products and customers.
                            </p>
                            <p className='text-lg-start  text-center'>
                                <Link reloadDocument to="/about" className='mb-0 mx-lg-5 ps-lg-3' alt="navigate to about">
                                    <button className='btn styled-button text-center'>
                                        LEARN MORE
                                    </button>
                                </Link>
                            </p>
                        </div>
                        <div className='col g-0 d-flex d-none d-lg-block' style={{backgroundColor: "#fcd21d"}} >
                            <div className="parallax-1 d-flex">
                                <Video/>
                            </div>
                        </div>
                    </div>
                </section>
                <img src={wave} alt="section-break"/>
                <section>
                    <div className='mx-lg-5'>
                        <p className='mx-lg-5 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                            WHAT WE DO
                        </p>
                        <p className='d-flex justify-content-center mx-lg-5 px-5 text-center mb-5'  style={{color:"#4d5459", fontSize:"1.2rem"}}>
                        We streamline workflows, increase efficiencies, and transform processes. Daring, opinionated, and challengers of the status quo, we adopt a holistic end-to-end approach which captures evidence-based insights to inform decisions and to enable you achieve better business outcomes.
                        </p>
                    </div>
                    <div className='container'>
                        <div className='row d-flex flex-lg-row flex-column'>
                            <div className='col mx-3 text-center'>
                                <i className="bi bi-lightbulb"></i>
                                <h3 style={{fontWeight:"650"}}>Consultancy</h3>
                                <p className='p-style'>
                                We provide strategy and consulting to transform your company –  whether that’s to drive growth, secure efficiencies or diversify your business. We work with you to align your technology and business strategies and create a robust, costed technology roadmap with dependencies that ensures you realise the benefits of the digital transformation you are seeking.
                                </p>
                            </div>
                            <div className='col mx-3 text-center'>
                                <div className='' >
                                    <i className="bi bi-file-earmark-bar-graph" ></i>
                                </div>
                                <h3 style={{fontWeight:"650"}}>System Reviews</h3>
                                <p  className='p-style'>
                                From submissions, editorial and production to sales, marketing, publicity and across the whole workflow, insights and reporting capabilities, we review your software across the entire publishing lifecycle. You’ll receive a report reviewing the product’s architecture, security, infrastructure, functionality, people, process and governance and a list of prioritised recommendations.
                                </p>
                            </div>
                            <div className='col mx-3 text-center'>
                            <i className="bi bi-tools"></i>
                                <h3 style={{fontWeight:"650"}}>Support</h3>
                                <p  className='p-style'>
                                To maintain your Salesforce applications, we provide support services ranging from just 4 days a month to a dedicated individual for 5 days a week – and all the way through to an entire team. We can work alongside your internal technology support team, or we can provide the complete service – working with your business users to help them get the most out of your systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='m-5'  style={{borderTop:"1px solid #4d5459"}}>
                            <p className='mt-5 mx-lg-5 mb-0 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                                ACCELERATING SUCCESS 
                            </p>
                            <p className='mx-lg-5 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                                THROUGH SALESFORCE
                            </p>
                            <p className='d-flex justify-content-center mx-lg-5 px-lg-5 text-center mb-5'  style={{color:"#4d5459", fontSize:"1.2rem"}}>
                                We leverage Salesforce as a low code platform to develop customer specific solutions with modules like Publicity or Advertising. Also, we implement standard Salesforce CRM, Case Management, and Marketing Cloud and integrate them with your existing technology architecture to ensure a seamless experience.
                            </p>
                    </div>
                    <div className='container'>
                        <div className='row d-flex flex-lg-row flex-column'>
                            <div className='col mx-lg-3 text-center'>
                                <i className="bi bi-cloudy"></i>
                                <h3 style={{fontWeight:"650"}}>Salesforce Accelerators</h3>
                                <p className='p-style'>
                                    In response to common issues faced by publishers globally, we have developed a number of solutions including a CRM accelerator adapted to the needs of publishers, a publicity module to manage lists, and an advertising module to book ad campaigns for new products and more! The modules are designed to be able to minimise implementation times and allow teams to focus on delivering value to customers.
                                </p>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <i className="bi bi-layers" ></i>
                                <h3 style={{fontWeight:"650"}}>Salesforce Rollouts</h3>
                                <p  className='p-style'>
                                    We transform companies by implementing, enhancing and integrating the Salesforce ecosystem: Salesforce CRM and CPQ to consolidate your customer data, gain insights and sell smarter; Service Cloud to retain your customers and enhance their experience; and Marketing Cloud and Pardot to ensure your long-term success with marketing automation.
                                </p>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <i className="bi bi-laptop"></i>
                                <h3 style={{fontWeight:"650"}}>Salesforce Apps</h3>
                                <p  className='p-style'>
                                    Get even more out of Salesforce with pre-built solutions. With our partners Rights2 Consultants, we developed and launched 
                                    <Link to={"https://appexchange.salesforce.com/appxListingDetail?listingId=a0N3A00000Ecs09UAB"} style={{textDecoration:"none"}}> RightsZone </Link> 
                                    – the next generation rights system with elegant and intuitive workflow tools facilitating the whole lifecycle of rights licensing, helping you manage deals swiftly and efficiently, and facilitating smarter working to grow your revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='m-5'  style={{borderTop:"1px solid #4d5459"}}>
                        <p className='mx-lg-5 mt-5 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                            WHO WE WORK WITH
                        </p>
                    </div>
                    <div className='container'>
                        <div className='row d-flex flex-md-row flex-column'>
                            <div className='col text-center'>
                                {companies.slice(0,6).map((data) => {
                                    return(
                                        <Link to={data.link} key={data.id}><img className='company-logo m-2' src={data.image} alt={data.description}/></Link> 
                                    )
                                })}
                            </div>
                            <div className='col text-center'>
                                {companies.slice(6,11).map((data) => {
                                    return(
                                        <Link  to={data.link} key={data.id}><img className='company-logo m-2' src={data.image} alt={data.description}/></Link> 
                                    )
                                })}
                            </div>
                            <div className='col text-center'>
                                {companies.slice(11,16).map((data) => {
                                    return(
                                        <Link  to={data.link} key={data.id}><img className='company-logo m-2' src={data.image} alt={data.description}/></Link> 
                                    )
                                })}
                            </div>
                            <div className='col text-center'>
                                {companies.slice(16,23).map((data) => {
                                    return(
                                        <Link  to={data.link} key={data.id}><img className='company-logo m-3' src={data.image} alt={data.description}/></Link> 
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <img src={wave2} alt="section-break"/>
                <section style={{backgroundColor:"#f9d019"}}>
                    <div className='mx-lg-5 pb-5'>
                            <p className='mx-lg-5 mb-0 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                                GENERATING NEW IDEAS 
                            </p>
                            <p className='mx-lg-5 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                                SOLVING BIG PROBLEMS
                            </p>
                    </div>
                    <div className='container'>
                        <div className='row d-flex flex-md-row flex-column'>
                            <div className='col mx-lg-  3 text-center'>
                                <img className='img-icon' decoding="async" src={"https://ribbonfish.co.uk/wp-content/uploads/2019/08/book.png"} alt="knowledge"/>
                                <h1 style={{fontWeight:"650", color:"#fff"}}>120</h1>
                                <p className='p-style' style={{fontWeight:"800"}}>
                                    YEARS OF INDUSTRY KNOWLEDGE
                                </p>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <img className='img-icon' decoding="async" src={"https://ribbonfish.co.uk/wp-content/uploads/2019/08/thought.png"} alt="experts"/>
                                <h1 style={{fontWeight:"650", color:"#fff"}}>25</h1>
                                <p  className='p-style'style={{fontWeight:"800"}}>
                                    EXPERT CONSULTANTS
                                </p>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <img className='img-icon' decoding="async" src={"https://ribbonfish.co.uk/wp-content/uploads/2019/08/clipboard.png"} alt="projects"/>
                                <h1 style={{fontWeight:"650", color:"#fff"}}>150+</h1>
                                <p  className='p-style' style={{fontWeight:"800"}}>
                                    COMPLETED PROJECTS
                                </p>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <img className='img-icon' decoding="async" src={"https://ribbonfish.co.uk/wp-content/uploads/2019/08/coffee-cup.png"} alt="coffee"/>
                                <h1 style={{fontWeight:"650", color:"#fff"}}>2000+</h1>
                                <p  className='p-style' style={{fontWeight:"800"}}>
                                    CUPS OF COFFEE
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <img src={wave3} alt="section-break"/>
                <section className='mb-5'>
                    <div className='container'>
                        <div className='row d-flex flex-lg-row flex-column'>
                            <div className='col mx-lg-3 text-center'>
                                <img decoding="async" style={{width:"100%"}} src={"https://ribbonfish.co.uk/wp-content/uploads/2019/09/doubleimagedifference-1.jpg"} alt=""/>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <p className=' mx-2 pb-4 text-lg-start text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                                    WHY WE ARE DIFFERENT
                                </p>
                                <strong style={{color:"#4d5459",fontStyle:"italic"}}>We don’t want to meet expectations, we want to exceed them!</strong>
                                <p className='p-style text-lg-start pt-4'>
                                    Our team has worked directly for publishing houses across the UK and US collectively for well over 100 years. We understand the industry and the challenges you are facing from manual processes, spreadsheets to patch workflows together, and reliance on key people amongst many others.
                                </p>
                                <p className='p-style text-lg-start'>
                                    But also, we get that every problem is nuanced and different so we think outside-the-box to tailor the right solution just for you. We are a boutique firm with consultants, developers, and solution architects who will work with internal teams to develop the right solutions based on your requirements and growth strategy. 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='m-5' style={{borderTop:"1px solid #4d5459"}}>
                    <div className='container' >
                        <p className=' mx-2 mt-5 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                            CASE STUDIES
                        </p>
                        <p className='p-style text-center mx-lg-5 mb-5 px-lg-5'>
                            Making a difference to customers is what drives and delights us! 
                            <Link reloadDocument to='/success-stories' style={{textDecoration:"none"}}> Read our success stories </Link>
                            and learn about the diversity of our work – from integrating systems to developing a range of CRM solutions.
                        </p>
                        <div className='row d-flex flex-lg-row flex-column'>
                            <div className='col mx-lg-3 text-lg-start text-center'>
                                <img style={{width:"100%"}} src={img1} alt=""/>
                                <h3>Accelerating CRM for academic presses</h3>
                                <p>
                                    In response to the common issues faced by publishers worldwide, we developed a 
                                    <span style={{fontWeight:"600"}}> Salesforce CRM Accelerator </span> 
                                    designed specifically for publishers to kick-start their journey to unlocking customer insights and driving customer engagement.
                                </p>
                                <Link to="https://ribbonfish.co.uk/salesforce-crm-accelerator/" alt="read more on salesforce">
                                    <button className='btn styled-button-dark  text-lg-start text-center mb-3'>
                                        Read More
                                    </button>
                                </Link>
                            </div>
                            <div className='col mx-lg-3 text-lg-start text-center'>
                                <img style={{width:"100%"}} src={img2} alt=""/>
                                <h3>Improving workflows for publishing teams</h3>
                                <p>
                                    Find out how our strategic partnership with 
                                    <span style={{fontWeight:"600"}}> Springer Nature </span> 
                                    enabled them to become a technology services provider focusing on systems integration, streamlining, and improving workflow for teams after company merger.
                                </p>
                                <Link to="https://ribbonfish.co.uk/springer-nature/" alt="read more on springer">
                                    <button className='btn styled-button-dark text-lg-start text-center mb-3'>
                                        Read More
                                    </button>
                                </Link>
                            </div>
                            <div className='col mx-lg-3 text-lg-start text-center'>
                                <img style={{width:"100%"}} src={img3} alt=""/>
                                <h3>Creating efficiencies with Salesforce</h3>
                                <p>
                                We came on board to transform 
                                <span style={{fontWeight:"600"}}> Macmillan Learning</span> 
                                ’s legacy CRM into a Salesforce-driven system, providing them with an intuitive, easy-to-use, anytime, anywhere, anyplace tool the team could use to grow sales.
                                </p>
                                <Link to="https://ribbonfish.co.uk/macmillan-learning-crm/" alt="read more on macmillan">
                                    <button className='btn styled-button-dark text-lg-start text-center mb-3'>
                                        Read More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <img src={wave4} alt="section-break"/>
                <section style={{backgroundColor:"#f9d019"}}>
                    <div className='mx-lg-5 px-5'>
                        <p className='mx-lg-5 mb-0 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                            OUR EXPERTISE
                        </p>
                        <p className='p-style text-center mx-lg-5 px-lg-5' style={{color:"#4d5459", fontWeight:"400"}}>
                            We have a 
                            <Link reloadDocument to='/success-stories' style={{textDecoration:"none"}}> talented team </Link>
                            with years of publishing experience between them. We acknowledge that the most important skill of all is communication, but we are also wizards at the technical aspects. This means you can concentrate on your core business and do what you do best.
                        </p>
                    </div>
                    <div className='container'>
                        <div className='row d-flex flex-md-row flex-column'>
                            <div className='col mx-lg-3 text-center'>
                                <img className='img-icon' decoding="async" src={"https://ribbonfish.co.uk/wp-content/uploads/2019/08/speech-bubble.png"} alt="communication"/>
                                <p className='p-style m-2' style={{fontWeight:"600"}}>
                                    Communication skills are critical and an integral part of our approach.
                                </p>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <img className='img-icon' decoding="async" src={"https://ribbonfish.co.uk/wp-content/uploads/2019/08/collaboration.png"} alt="change"/>
                                <p  className='p-style m-2'style={{fontWeight:"600"}}>
                                    Change management is key (technology is often the easy bit…)
                                </p>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <img className='img-icon' decoding="async" src={"https://ribbonfish.co.uk/wp-content/uploads/2019/08/software.png"} alt="solutions"/>
                                <p  className='p-style m-2'style={{fontWeight:"600"}}>
                                    We have delivered solutions on Apex, .Net, Javascript, React and php.
                                </p>
                            </div>
                            <div className='col mx-lg-3 text-center'>
                                <img className='img-icon' decoding="async" src={"https://ribbonfish.co.uk/wp-content/uploads/2019/08/web.png"} alt="platforms"/>
                                <p  className='p-style m-2' style={{fontWeight:"600"}}>
                                    On platforms such as Salesforce, Azure, WS02, WordPress & Sharepoint.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <img src={wave5} alt="section-break"/>
                <section>
                    <div className='container'>
                        <p className=' mx-2 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                            FROM OUR CLIENTS
                        </p>
                        <p className='p-style text-center mx-lg-5 mb-0 px-lg-5'>
                            We love working with our clients and believe that’s one of the reasons why they keep coming back.
                        </p>
                        <p className='p-style text-center mx-lg-5 mb-5 px-lg-5'>
                            But don’t just take our word for it…
                        </p>
                        <Clients/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage
