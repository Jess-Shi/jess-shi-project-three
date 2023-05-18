import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation().pathname;

    return (
        <nav>
            <ul className="top-nav">
                <li><Link to="/" className={location === "/" ? "selected" : null}>Home</Link></li>
                <li><Link to="/addLog" className={location === "/addLog" ? "selected" : null}>Add Log</Link></li>
                <li><Link to="/viewLogs" className={location.startsWith("/viewLogs") ? "selected" : null}>View Logs</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;