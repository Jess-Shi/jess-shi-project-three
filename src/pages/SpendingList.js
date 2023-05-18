import SpendingLog from "../components/SpendingLog.js";
import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const SpendingList = () => {
    const [animate, setAnimate] = useState(false);
    const [message, setMessage] = useState(null);
    const [spendingData, spendingRef, set] = useOutletContext();
    const { selectedOption } = useParams();

    useEffect(() => {
        setAnimate(true);
    }, []);
    
    const filteredData = spendingData.filter(entry => {
        return entry.month === selectedOption || entry.year === selectedOption || entry.tag === selectedOption;
    });

    const dataToDisplay = selectedOption ? filteredData : spendingData;
    let totalAmount = 0;
    dataToDisplay.forEach(entry => {
        totalAmount += parseFloat(entry.amount);
    });

    const handleDelete = (idToDelete) => {
        const spendingCopy = JSON.parse(JSON.stringify(spendingData));
        const newSpendingData = spendingCopy.filter(entry => {
            return entry.id !== idToDelete;
        });
        set(spendingRef, newSpendingData)
            .then(() => {
                setMessage({ class: "success", text: "Entry removed successfully!" });
                setTimeout(() => {
                    setMessage(null);
                }, 1500);
            }).catch(() => {
                setMessage({ class: "error", text: "An error occurred, please try again." });
                setTimeout(() => {
                    setMessage(null);
                }, 1500);
            });
    }

    return (
        <>
            <div className="list-headings">
                <p>Date</p>
                <p>Place</p>
                <p className="amount">Amount</p>
            </div>
            <ol className={`spending-list ${animate ? "animate" : ""}`}>
                {
                    dataToDisplay.map(entry => <SpendingLog key={entry.id} entry={entry} handleDelete={handleDelete} />)
                }
            </ol>
            <p className="total">Total: $<span>{totalAmount.toFixed(2)}</span></p>
            {
                message ? <p className={`message ${message.class}`}>{message.text}</p> : null
            }
        </>
    )
}

export default SpendingList;