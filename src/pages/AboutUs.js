import React from 'react'
import { Link } from 'react-router-dom';
import wave from "../assets/media/wave.svg";
import wave2 from "../assets/media/wave2.svg";
const AboutUs = () => {
    return (
    <>
        <main>
            <section className='container-fluid'>
                <div className='row d-flex flex-lg-row flex-column'>
                    <div className='col g-0 d-flex d-none d-lg-block' style={{backgroundColor: "#fcd21d"}} >
                        <div className="parallax-2 d-flex">
                        </div>
                    </div>
                    <div className='col' style={{backgroundColor:" #f9d019"}}>
                        <p className='mx-lg-5 mt-5 p-3 text-lg-start text-center' style={{fontWeight:"500" , color:"#222222", fontSize:"1.3rem"}}>
                            YOUR GOAL IS OUR GOAL
                            
                        </p>
                        <p className='mb-0 ms-lg-5 ps-lg-3 text-lg-start text-center' style={{fontWeight:"700" , color:"white", fontSize:"3rem"}}>
                            OUR TEAM:
                        </p>
                        <p className='ms-lg-5 ps-lg-3 text-lg-start text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"3rem"}}>
                            YOUR FUTURE SUCCESS
                        </p>
                    </div>
                </div>
            </section>
            <img src={wave} alt="section-break"/>
            <section>
                <div className='mx-lg-5'>
                    <p className='mx-lg-5 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                        EXPERT CONSULTANTS IN CRM AND SALESFORCE
                    </p>
                    <p className='d-flex justify-content-center mx-lg-5 px-5 text-center mb-5'  style={{color:"#4d5459", fontSize:"1.2rem"}}>
                        Our London and New Delhi teams share outstanding technical skills, a long held passion for the publishing and media industries, and a desire to provide phenomenal customer service. This means we can deliver unbeatable results – whether providing consultancy services to facilitate solutions to complex CRM problems or delivering Salesforce applications that transform your business.
                    </p>
                    <p className='d-flex justify-content-center mx-lg-5 px-5 text-center mb-5'  style={{color:"#4d5459", fontSize:"1.2rem"}}>
                        We have decades of publishing experience, having managed and delivered global business applications for world-leading publishers, and we employ the brightest apprentices and graduates to help us stay ahead of the curve with modern-day alternatives to legacy solutions.
                    </p>
                </div>
            </section>
            <section>
                <div className='m-5'style={{borderTop:"1px solid #4d5459"}}>
                    <p className='mt-5 mx-lg-5  text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                        WHAT WE DO
                    </p>
                    <p  className='mx-lg-5 px-5 text-center p-style'>
                        We 
                        <Link reloadDocument to={"/success-stories"} style={{textDecoration:"none"}}> work with publishers </Link> 
                        to streamline workflow and transform business processes. Once a functionality gap or a workflow inefficiency has been identified, we leverage Salesforce as a low code platform to develop customer specific solutions, with modules like Publicity or Advertising, which can then be adapted by our other customers. In addition, we also work to implement standard Salesforce CRM, Case Management, Marketing Cloud modules and integrate them with the existing technology architecture.
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
                <div className='m-5'style={{borderTop:"1px solid #4d5459"}}>
                    <p className='mt-5 mx-lg-5 text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                        OUR MISSION
                    </p>
                    <p className='d-flex justify-content-center mx-lg-5 px-5 text-center mb-5'  style={{color:"#4d5459", fontSize:"1.2rem"}}>
                        We aim to empower publishers through innovative technological solutions to achieve success through seamless workflows and enhanced business processes whilst putting our customers and users at the heart of the solution. Our tailored approaches not only address unique challenges but foster a community of shared progress, where solutions evolve collectively benefiting all stakeholders. 
                    </p>
                </div>
            </section>
            <section>
                <div className='m-5'style={{borderTop:"1px solid #4d5459"}}>
                    <p className='mt-5 mx-lg-5  text-center' style={{fontWeight:"700" , color:"#222222", fontSize:"2.5rem"}}>
                        OUR VALUES
                    </p>
                </div>
                <div className='container'>
                    <div className='row d-flex flex-lg-row flex-column'>
                        <div className='col mx-lg-3 text-center'>
                            <i className="bi bi-star"></i>
                            <h3 style={{fontWeight:"650"}}>Passion-Driven Excellence</h3>
                            <p className='p-style'>
                                We delve into each project with enthusiasm, aiming not just to meet, but to exceed expectations. Through our fervor, we strive to be more than just a solutions provider; we aim to be a valued partner in our client’s journey towards streamlined operations and sustained growth.
                            </p>
                        </div>
                        <div className='col mx-lg-3 text-center'>
                            <i className="bi bi-lightbulb" ></i>
                            <h3 style={{fontWeight:"650"}}>Innovation</h3>
                            <p  className='p-style'>
                                We strive for a culture of continuous improvement and innovation to provide cutting-edge solutions. Our approach is rooted in understanding the evolving needs of the publishing sector and leveraging the power of Salesforce to meet these needs. 
                            </p>
                        </div>
                        <div className='col mx-lg-3 text-center'>
                            <i className="bi bi-person-arms-up"></i>
                            <h3 style={{fontWeight:"650"}}>Customer-Centricity</h3>
                            <p  className='p-style'>
                                Every functionality gap and workflow inefficiency presents an opportunity to create value. We listen, we analyze, and we tailor our solutions to meet the unique needs of each customer. We believe in building relationships based on trust and long-term collaboration. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row d-flex flex-lg-row flex-column'>
                        <div className='col mx-3 text-center'>
                            <i className="bi bi-puzzle"></i>
                            <h3 style={{fontWeight:"650"}}>Collaborative Evolution</h3>
                            <p className='p-style'>
                                We value the power of shared progress. When one client benefits from a solution, the ripple effect can be felt across our entire customer base. Our environment encourages learning, sharing, and adapting solutions collectively, forging a path of shared success. 
                            </p>
                        </div>
                        <div className='col mx-3 text-center'>
                            <div className='' >
                                <i className="bi bi-recycle" ></i>
                            </div>
                            <h3 style={{fontWeight:"650"}}>Sustainable Transformation</h3>
                            <p  className='p-style'>
                                We aim for solutions that not only resolve present challenges but are adaptable to future changes, ensuring a sustainable transformation of business processes. Our responsibility extends beyond immediate solutions to creating a legacy of enduring value. 
                            </p>
                        </div>
                        <div className='col mx-3 text-center'>
                        <i className="bi bi-heart-fill"></i>
                            <h3 style={{fontWeight:"650"}}>Ethical Integrity</h3>
                            <p  className='p-style'>
                                We conduct our business with the highest standards of professional ethics, transparency, and accountability. Our reputation is built on the trust and reliability perceived by our clients and partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <img src={wave2} alt="section-break"/>
            <section>
                <div style={{backgroundColor:"#f9d019"}}>
                    <p className='mx-lg-5 text-center' style={{fontWeight:"700" , color:"#fff", fontSize:"2.5rem"}}>
                        MEET SOME OF THE TEAM
                    </p>
                    <p className='d-flex justify-content-center mx-lg-5 px-5 text-center pb-5'  style={{color:"#4d5459", fontSize:"1.2rem"}}>
                        At Ribbonfish, we work closely with our customers to optimise business processes and create integrated and innovative experiences for their employees and clients. Our agile team is headed up by a team of executives with experiences from both the client and vendor side, and is supported by colleagues in New Delhi.
                    </p>
                </div>
                <div className='container'>
                    <div className='row d-flex flex-lg-row flex-column'>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2019/08/APM_6207e-e1631880830510.jpg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Marc Defosse</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>FOUNDER</h4>
                            <p className='p-style'>
                                Marc started his career at Accenture, and has subsequently worked on designing and implementing innovative CRM solutions for publishers around the world, understanding their goals and vision so he can deliver optimal value.
                            </p>
                        </div>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Jess.jpg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Jessica Healy</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>HEAD OF OPERATIONS</h4>
                            <p className='p-style'>
                                Jess has over 8 years of experience in operational roles. She is experienced in increasing efficiency and driving down operational cost. A flexible and motivated manager, Jess enjoys working closely with her team to deliver business growth.
                            </p>
                        </div>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2019/08/APM_6106e-e1631881029272.jpg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Sanjeev Dash</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>HEAD OF STRATEGY</h4>
                            <p className='p-style'>
                                Sanjeev is a media consultant who has worked for leading academic publishers, newspapers and market research firms. He has experience in requirements and discovery workshops, technology audits and business analysis.
                            </p>
                        </div>
                    <div className='row d-flex flex-lg-row flex-column'>

                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2023/04/Screenshot-2023-04-12-at-12.47.58.png" alt="" />
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Sam Tamayo</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>MANAGING DIRECTOR – MANILA</h4>
                            <p className='p-style'>
                                Sam believes in the transformative capability of using technology for sustainable development. She has extensive professional experience in digital marketing – from running email campaigns to managing global websites. Outside work, she leads an award-winning youth-led NGO in the Philippines.
                            </p>
                        </div>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2024/03/Ali-Zaidi-Pic-1.jpeg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Ali Zaidi</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>SENIOR CONSULTANT</h4>
                            <p className='p-style'>
                                With more than a decade of dedicated engagement within the Salesforce ecosystem, Ali has cultivated extensive expertise encompassing configuration, development, architecture, and DevOps methodologies. Demonstrating adeptness across these domains, Ali serves as a technical lead, architect, and advisor in facilitating digital transformation initiatives.
                            </p>
                        </div>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}}src="https://ribbonfish.co.uk/wp-content/uploads/2021/11/Kevin.jpg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Kevin Paul</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>HEAD OF PROFESSIONAL SERVICES</h4>
                            <p className='p-style'>
                                Kevin has over a decade worth of experience in Information Technology in a variety of roles including consulting & implementation, training, business analysis and project management.
                            </p>
                        </div>
                       </div> 
                    <div className='row d-flex flex-lg-row flex-column'>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Alex.png" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Alex Kapp</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>PROJECT MANAGER</h4>
                            <p className='p-style'>
                                Alex has over 20 years experience in various operational and technical roles within STM and Educational publishing. This brings a wealth of business expertise and a real understanding of client requirements.
                            </p>
                        </div>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Signe.png" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Signe Thomsen</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>DEVELOPER</h4>
                            <p className='p-style'>
                                Signe is a recent convert to the Salesforce eco system. She is interested in building efficient solutions to deliver highly useable experiences and has been working with Salesforce CPQ and Marketing Cloud. She is always on board to tackle a fresh challenge.
                            </p>
                        </div>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2023/07/Elena-Baird-2.jpg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Elena Baird</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>SALESFORCE CONSULTANT</h4>
                            <p className='p-style'>
                                Elena brings a wealth of knowledge and experiences, especially with financial and accounting processes and systems. She enjoys continuous learning and is passionate about increasing efficiency by optimising operational processes through business automation.
                            </p>
                        </div>
                        </div>
                    <div className='row d-flex flex-lg-row flex-column'>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2021/09/Chris.png" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Chris Trainor</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>SENIOR CONSULTANT</h4>
                            <p className='p-style'>
                                Having started as an apprentice doing .NET 8 years ago, Chris has since become a talented Salesforce developer and integration specialist ensuring all customer requirements and benefits are realised.
                            </p>
                        </div>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2023/10/Emily.jpg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Emily King</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>SENIOR PROJECT MANAGER</h4>
                            <p className='p-style'>
                                Emily has experience in optimising, automating and streamlining business processes. She enjoys learning new technologies, analysing problems, delivering solutions, and working cross-functionally to effectively manage projects end-to-end for all stakeholders.
                            </p>
                        </div>
                        <div className='col text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2023/06/Raja-5.jpg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Raja Majjiga</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>SALESFORCE DEVELOPER</h4>
                            <p className='p-style'>
                                Raja is a self-motivated, quick learner with the ability to adapt and conform to changing responsibilities. He has 15 years of experience in software engineering industry. During his career, he worked as an engineer, lead, and Director of Software Engineering team. He recently shifted gears to Salesforce eco system.
                            </p>
                        </div>
                    </div>
                    <div className='row d-flex flex-lg-row flex-column'>
                        <div className='col-lg-4 text-center m-2'>
                            <img decoding="async" style={{maxWidth:"50%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2024/03/Valentin-Romanov-1.jpg" alt=""/>
                            <h3 style={{fontWeight:"650", fontSize:"1.3rem"}}>Valentin Romanov</h3>
                            <h4 style={{fontWeight:"550", color:"#4d5459", fontSize:"0.9rem"}}>SALESFORCE DEVELOPER</h4>
                            <p className='p-style'>
                                Valentin obtained a Bachelor’s degree in Software Engineering. Currently, he serves as one of our leads He has four years of experience in Salesforce and possesses six certifications
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row d-flex flex-lg-row flex-column mt-5'>
                        <div className='col text-center m-2'>
                            <img decoding="async"  style={{maxWidth:"100%"}} src="https://ribbonfish.co.uk/wp-content/uploads/2019/09/IMG_9985.jpg" alt="" title=""/>
                        </div>
                        <div className='col text-lg-start text-center'>
                            <h3 style={{fontWeight:"650"}}>New Delhi</h3>
                            <p className='p-style'>
                                We set up our newest company – Ribbonfish Technologies – in India at the beginning of 2019. Our aim is to expand and embellish our Salesforce and WS02 development teams, and we were keen to locate in New Delhi, which has a wealth of technology talent and a tangible energy and buzz!
                            </p>
                            <Link to="https://ribbonfish.co.uk/new-delhi/" style={{textDecoration:"none"}}>Meet some of the team.</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
    )
}

export default AboutUs