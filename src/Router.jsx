import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import Project from "./components/Projects/Project";


export default function PortfolioRouter() {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/project' element={<Project />} />
            </Routes>
        </Router>
    )
}