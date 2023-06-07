import { Link } from "react-router-dom";
import pragmaLogo from "../assets/pragma-logo.png";
import './Home.css'

function Home() {
    return (
        <div className="home-wrapper">
            <div>
                <a href="https://pragma.team/" target="_blank" rel="noreferrer">
                    <img src={pragmaLogo} className="logo pragma" alt="Pragma logo" />
                </a>
            </div>
            <h1>Livecode tool</h1>
            <p>CodeFlask + Vite + React</p>
            <div className="card">
                <Link to="/editor">Dive in</Link>
                <p>
                    <code>(c) Copyright {new Date().getFullYear()}</code>
                </p>
            </div>
        </div>
    )
}

export default Home