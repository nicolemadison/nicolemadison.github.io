import Footer from "../component/Footer"
export default function Projects(){
    return(
        <>
            <div className="container-fluid">
                <section className="row">
                    <div className="col-sm-6 parallax parallax-1 d-none d-lg-block d-md-block">
                    </div>
                    <div className="col-sm-6 g-3 d-flex mx-auto d-none d-lg-block d-md-block parallax-text" style={{height:"80vh"}}>
                        <p className="p-3 fs-5" >On March 2022, I started working on a website project for my course which integrates different learning platforms into one hub.
                            I'm tasked to turn Figma designs to working front-end pages using Django with a Flask backend.
                            I explored on making responsive pages and addition of interactivity for users.
                        </p>
                        <span className="p-3">Check out the public project repository:</span>
                        <span>
                            <a href="https://github.com/govle-192-21-2/govle" target="_blank" rel="noreferrer" style={{textDecoration:"underline"}} >GoVLê</a>
                        </span>
                    </div>

                    <div className="parallax-small parallax-small-1 d-none mx-auto" style={{height:"80vh"}}>
                    </div>
                    <div className="parallax-text-small d-none text-center" >
                        <p className="text-center">On March 2022, I started working on a website project for my course which integrates different learning platforms into one hub.
                            I'm tasked to turn Figma designs to working front-end pages using Django with a Flask backend. 
                            I explored on making responsive pages and addition of interactivity for users.
                        </p>
                        <span>Check out the public project repository:</span>
                        <span>
                            <a href="https://github.com/govle-192-21-2/govle" target="_blank" rel="noreferrer" style={{textDecoration:"underline"}} >GoVLê</a>
                        </span>
                    </div>
                    <div className="parallax-small parallax-small-1 d-none mx-auto" style={{height:"80vh"}}>
                    </div>
                </section>

                <section className="row">
                    <div className="col-sm-6 g-3 d-flex mx-auto d-none d-lg-block d-md-block parallax-text" style={{height:"80vh"}}>
                        <p className="p-3 fs-5">On June 2022, I got my first internship with ILC Diliman as a front-end web developer tasked to turn designs into front-end pages using Django.</p>
                        <p className="p-3 fs-5">Later on, I got offered my first part-time job to continue the project using Django and React.</p>
                    </div>
                    <div className="col-sm-6 parallax parallax-2 d-none d-lg-block d-md-block">
                    </div>

                    <div className="parallax-small parallax-small-2 d-none mx-auto" style={{height:"80vh"}}>
                    </div>
                    <div className="parallax-text-small d-none" >
                        <p className="text-center">On June 2022, I got my first internship with ILC Diliman as a front-end web developer tasked to turn designs into front-end pages using Django.
                            Later on, I got offered my first part-time job to continue the project using Django and React.
                        </p>
                    </div>
                    <div className="parallax-small parallax-small-2 d-none mx-auto" style={{height:"80vh"}}>
                    </div>
                </section>

                <section className="row">
                    <div className="col-sm-6 parallax parallax-3 d-none d-lg-block d-md-block">
                    </div>
                    <div className="col-sm-6 g-3 d-flex mx-auto d-none d-lg-block d-md-block parallax-text" style={{height:"80vh"}}>
                        <p className="p-3 fs-5" >On March 2023, I got assigned on another project as web developer with focus on front-end pages, user interface and integrating with Django REST API.
                            I fulfilled the clients's requests and discussed further suggestions for improvement.
                        </p>
                    </div>

                    <div className="parallax-small parallax-small-3 d-none mx-auto" style={{height:"80vh"}}>
                    </div>
                    <div className="parallax-text-small d-none" >
                        <p className="text-center">On March 2023, I got assigned on another project as web developer with focus on front-end pages, user interface and integrating with Django REST API.
                            I fulfilled the clients's requests and discussed further suggestions for improvement.
                        </p>
                    </div>
                    <div className="parallax-small parallax-small-3 d-none mx-auto" style={{height:"80vh"}}>
                    </div>
                </section>

                <section className="row">
                    <div className="col-sm-6 g-3 d-flex mx-auto d-none d-lg-block d-md-block parallax-text" style={{height:"80vh"}}>
                        <p className="p-3 fs-5" >Currently, I am working on another project as part-time developer to make a React web application to utilize existing Django REST API.</p>
                    </div>
                    <div className="col-sm-6 parallax parallax-4 d-none d-lg-block d-md-block">
                    </div>

                    <div className="parallax-small parallax-small-4 d-none mx-auto" style={{height:"80vh"}}>
                    </div>
                    <div className="parallax-text-small d-none" >
                        <p className="text-center">Currently, I am working on another project as part-time developer to make a React web application to utilize existing Django REST API.</p>
                    </div>
                    <div className="parallax-small parallax-small-4 d-none mx-auto" style={{height:"80vh"}}>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}