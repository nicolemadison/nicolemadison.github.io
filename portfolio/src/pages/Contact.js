export default function Contact(){
    return(
        <>
            <div className="p-3" style={{height:"50vh"}}>
                <h1>Contact Me:</h1>
                <p className="mx-2"><i className="bi bi-envelope-at" style={{color: "#000"}}></i> nicmdsn@gmail.com</p>
                <a className="mx-2" href="https://github.com/nicolemadison" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"#000"}}><i className="bi bi-github" style={{color: "#000;"}}></i> https://github.com/nicolemadison</a>
            </div>
        </>
    );
}