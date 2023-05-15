import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
    const location = useLocation();

    return (
        <nav>
            <ul className="top-nav">
                <li><Link to="/addLog" className={location.pathname === "/addLog" ? "selected" : null}>Add Log</Link></li>
                <li><Link to="/viewLogs" className={location.pathname === "/viewLogs" ? "selected" : null}>View Logs</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;