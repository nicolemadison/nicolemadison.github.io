import React from 'react'
import { Link } from 'react-router-dom';
import wave from "../assets/media/wave.svg";
import img1 from '../assets/media/companies/1.png';
const SuccessStories = () => {
  return (
    <>
    <main>
        <section className='container-fluid'>
            <div className='row d-flex flex-lg-row flex-column'>
                <div className='col' style={{backgroundColor:" #f9d019"}}>
                    <p className='mt-5 text-center' style={{fontWeight:"700" , color:"white", fontSize:"3rem"}}>
                        SUCCESS STORIES
                    </p>
                    <p className='d-flex justify-content-center mx-lg-5 px-5 text-center mb-5'  style={{lineHeight:"1.8" , color:"#222222", fontSize:"1.15rem"}}>
                        We are more than just a business technology consultancy. We work as a strategic partner to help clients achieve their goals on time and to budget.
                    </p>
                    <p className='d-flex justify-content-center mx-lg-5 px-5 text-center mb-5'  style={{lineHeight:"1.8" , color:"#222222", fontSize:"1.15rem"}}>
                        Publishers have a lot of similar challenges, as well as some that are unique to an organisation. Take a look at these case studies to see how your peers have been able to leverage our deep industry knowledge, combined with our technical prowess, to implement innovative solutions to real business problems.
                    </p>
                    
                </div>
            </div>
        </section>
        <img src={wave} alt="section-break"/>
        <section>
            <div className='container'>
                <div className='row d-flex flex-lg-row flex-column'>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                        <img style={{width:"100%"}} src={img1} alt=""/>
                        <h3>Accelerating CRM for academic presses</h3>
                        <p>
                            In response to the common issues faced by publishers worldwide, we developed a 
                            <span style={{fontWeight:"600"}}> Salesforce CRM Accelerator </span> 
                            designed specifically for publishers to kick-start their journey to unlocking customer insights and driving customer engagement.
                        </p>
                        <Link to="https://ribbonfish.co.uk/salesforce-crm-accelerator/">
                            <button className='btn styled-button-dark  text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                    <img decoding="async" style={{width:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/2.png" alt=""/>
                        <h3>Integration to drive engagement</h3>
                        <p>
                            We worked with the team at 
                            <span style={{fontWeight:"600"}}> Macmillan Learning </span> 
                            to implement WS02 Enterprise Service Bus as an integration platform so they could improve the customer service experience and become more proactive as an organisation.
                        </p>
                        <Link to="https://ribbonfish.co.uk/case-study-ws02-integration-macmillan-learning/">
                            <button className='btn styled-button-dark text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                        <img decoding="async" style={{width:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Pamoja.png" alt=""/>
                        <h3>Boosting sales with CRM user adoption</h3>
                        <p>
                            Working with the team at 
                            <span style={{fontWeight:"600"}}> Pamoja </span> 
                            to optimise workflow, improve reporting and increase sales team usage of the recently implemented Salesforce CRM system – all with the aim to help them free up time focus on making sales.
                        </p>
                        <Link to="https://ribbonfish.co.uk/pamoja/">
                            <button className='btn styled-button-dark text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mx-lg-5 px-lg-5 py-5'>
                <blockquote className='mx-5 px-lg-5 text-center'>
                    “We were fortunate to partner with Ribbonfish, a publishing-accelerated Salesforce implementer, 
                    who helped us to quickly realize the benefits of working in these systems with their publishing acumen, kindness and excellent project-management / tech skillset.”
                </blockquote>
                <p className='p-style mx5 px-lg-5 text-center' style={{fontWeight:"500"}}>
                    – Katie Hope, Director of Marketing & Sales at Princeton University Press
                </p>
            </div>
        </section>
        <section>
            <div className='container'>
                <div className='row d-flex flex-lg-row flex-column'>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                        <img decoding="async" style={{width:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Macmillan.png" alt=""/>
                        <h3>Streamlining publicity for departments</h3>
                        <p>
                            To help the publicity departments within each of the publishing divisions across the 
                            <span style={{fontWeight:"600"}}> Macmillan Group</span> 
                            , we redeveloped and streamlined Salesforce database to allow them to coordinate, track and manage multiple media contacts.
                        </p>
                        <Link to="https://ribbonfish.co.uk/macmillan-publishers/">
                            <button className='btn styled-button-dark  text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                        <img decoding="async" style={{width:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/SpringerNature.png" alt=""/>
                        <h3>Improving workflows for publishing teams</h3>
                        <p>
                            Find out how our strategic partnership with 
                            <span style={{fontWeight:"600"}}> Springer Nature </span> 
                            enabled them to become a technology services provider focusing on systems integration, streamlining, and improving workflow for teams after company merger.
                        </p>
                        <Link to="https://ribbonfish.co.uk/springer-nature/">
                            <button className='btn styled-button-dark text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                        <img decoding="async" style={{width:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Macmillan-Learning-3.png" alt=""/>
                        <h3>Complex workflow consolidation</h3>
                        <p>
                            Our journey to assist 
                            <span style={{fontWeight:"600"}}> Macmillan Learning </span> 
                            in simplifying and unifying their workflows by implementing Salesforce Service Cloud – enabling them to improve connections with their customers and transform their overall experience.
                        </p>
                        <Link to="https://ribbonfish.co.uk/macmillan-learning/">
                            <button className='btn styled-button-dark text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mx-lg-5 px-lg-5 py-5'>
                <blockquote className='mx-5 px-lg-5 text-center'>
                    “We have both a system that works beautifully and a group of satisfied users. Everyone is very happy with the developments and we really appreciate all of the work you put in to making this such a successful project. 
                    <br/>
                    <br/>
                    Working with Ribbonfish really was a pleasure – thank you for all your help!”
                </blockquote>
                <p className='p-style mx5 px-lg-5 text-center' style={{fontWeight:"500"}}>
                    – Hillary Scarbrough, Senior Director of Business Systems at Macmillan
                </p>
            </div>
        </section>
        <section>
            <div className='container'>
                <div className='row d-flex flex-lg-row flex-column'>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                        <img decoding="async" style={{width:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Pamoja.png" alt=""/>
                        <h3>Integration to drive engagement</h3>
                        <p>
                            We worked with the team at 
                            <span style={{fontWeight:"600"}}> Macmillan Learning </span> 
                            to implement WS02 Enterprise Service Bus as an integration platform so they could improve the customer service experience and become more proactive as an organisation.

                        </p>
                        <Link to="https://ribbonfish.co.uk/case-study-ws02-integration-macmillan-learning/">
                            <button className='btn styled-button-dark  text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                        <img decoding="async" style={{width:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Ocorian.png" alt=""/>
                        <h3>Seamless migration for success</h3>
                        <p>
                            How we accelerated the migration of two Salesforce systems for the team at 
                            <span style={{fontWeight:"600"}}> Ocorian </span> 
                            – providing consistency and integrity in the configuration and minimising disruption to the business during the transition.
                        </p>
                        <Link to="https://ribbonfish.co.uk/Ocorian/">
                            <button className='btn styled-button-dark text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                    <div className='col mx-lg-3 text-lg-start text-center'>
                        <img decoding="async" style={{width:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Macmillan-Ed.png" alt=""/>
                        <h3>Systems to support designers</h3>
                        <p>
                            We sought to eliminate disparate processes and workflows and helped freelance designers working with 
                            <span style={{fontWeight:"600"}}> Macmillan Education </span> 
                            to upload and access cover designs anytime, from anywhere, on any device.
                        </p>
                        <Link to="https://ribbonfish.co.uk/macmillan-education/">
                            <button className='btn styled-button-dark text-lg-start text-center mb-3'>
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default SuccessStories
