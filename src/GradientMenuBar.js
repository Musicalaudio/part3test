import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

const GradientMenuBar = () => {
    return(
        <nav className="home-gradient">
                <ul className="nav-list">
                    <li ><Link to="#" className="home-button"><HomeIcon/> Home</Link></li>
                    <li><Link to="#">TOPIC 1</Link></li>
                    <li><Link to="#">TOPIC 2</Link></li>
                    <li><Link to="#">TOPIC 3</Link></li>
                    <li><Link to="#">TOPIC 4</Link></li>
                    <li><Link to="#">TOPIC 5</Link></li>
                </ul>
        </nav>
    )
}

export default GradientMenuBar;