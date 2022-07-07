import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./project.css";
import PROJECT from "../../assets/get-it-donee.png"
import { useNavigate } from "react-router-dom";


 
const Project = () =>{

    let navigate = useNavigate();
    return(
        <>
            <Header />
            
        <div className="container-project">
          <button onClick={() => {navigate("/")}} className='btn btn-primary'>View More</button>
        <img src={PROJECT} alt="My project" /></div>
            
            <Footer />
        </>
    )
}
export default Project;