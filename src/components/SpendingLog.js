import { useState } from "react";

const SpendingLog = ({ entry, handleDelete }) => {
    const [displayDropdown, setDisplayDropdown] = useState(false);
    const handleClick = () => {
        setDisplayDropdown(!displayDropdown);
    }

    const [year, month, day] = entry.date.split("-");
    const yearShort = parseInt(year) % 100;
    const dateShort = `${yearShort}-${month}-${day}`

    return (
        <li className="spending-log">
            <div className="log-summary">
                <p className="date-full">{entry.date}</p>
                <p className="date-short">{dateShort}</p>
                <p>{entry.place}</p>
                <p className="amount">{entry.amount}</p>
                <button className={displayDropdown ? "down" : ""} onClick={handleClick}>»</button>
            </div>
            {
                displayDropdown
                    ? <div className="log-dropdown">
                        <div className="log-details">
                            <p><span>Tag:</span> {entry.tag}</p>
                            <p><span>Notes:</span> {entry.notes}</p>
                        </div>
                        <button className="delete" onClick={() => handleDelete(entry.id)}>Delete</button>
                    </div>
                    : null
            }
        </li>
    )
}

export default SpendingLog;