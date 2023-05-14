import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/addLog">Add Log</Link></li>
                <li><Link to="/viewLogs">View Logs</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;