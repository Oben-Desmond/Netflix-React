
import { Link } from "react-router-dom"

function About() {

    return (
        <div>
            <h2>Welcome to my about page</h2>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link>
        </div>
    )
}


export default About 