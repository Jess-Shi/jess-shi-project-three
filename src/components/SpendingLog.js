import { useState } from "react";

const SpendingLog = ({ entry, handleDelete }) => {
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const handleClick = () => {
        setDisplayDropdown(!displayDropdown);
    }

    return (
        <li className="spending-log">
            <div className="log-summary">
                <p>{entry.date}</p>
                <p>{entry.place}</p>
                <p className="amount">{entry.amount}</p>
                <button onClick={handleClick}>{displayDropdown ? "-" : "+"}</button>
            </div>
            {
                displayDropdown
                    ? <div className="log-dropdown">
                        <div className="log-details">
                            <p>Tag: {entry.tag}</p>
                            <p>Notes: {entry.notes}</p>
                        </div>
                        <div className="log-buttons">
                            <button onClick={() => handleDelete(entry.id)}>Delete</button>
                        </div>
                    </div>
                    : null
            }
        </li>
    )
}

export default SpendingLog;