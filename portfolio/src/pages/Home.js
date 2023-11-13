import Footer from "../component/Footer"
import cat  from "../static/images/cat.png"
export default function Home(){
    return(
        <>
            <div className="d-flex flex-column m-5" style={{height:"75vh"}}>
                <img src={cat} className="mx-auto" style={{height:"50vh"}} alt="cat"/>
                <p className="text-center fs-1" style={{fontFamily:"Oswald"}}>Hi I'm Anne, a cat lover and part-time web developer at ILC Diliman.</p>
            </div>
            <Footer/>
        </>
    );
}