import { useState } from "react";

const SpendingLog = ({ date, place, amount, tag }) => {
    const [displayDetails, setDisplayDetails] = useState(false);
    const handleClick = () => {
        setDisplayDetails(!displayDetails);
    }

    return (
        <li>
            <p>{date}</p>
            <p>{place}</p>
            <p>{amount}</p>
            <button onClick={handleClick}>{displayDetails ? "-" : "+"}</button>
            {
                displayDetails
                ?   <div>
                        <p>Tag: {tag}</p>
                    </div>
                :   null
            }
        </li>
    )
}

export default SpendingLog;