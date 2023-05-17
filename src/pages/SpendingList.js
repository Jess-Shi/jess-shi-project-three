import SpendingLog from "../components/SpendingLog.js";
import { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const SpendingList = () => {
    const [animate, setAnimate] = useState(false);
    const [spendingData, spendingRef, set] = useOutletContext();
    const { selectedOption } = useParams();

    useEffect(() => {
        setAnimate(true);
    }, []);
    
    const filteredData = spendingData.filter(entry => {
        return entry.month === selectedOption || entry.year === selectedOption || entry.tag === selectedOption;
    });
    const dataToDisplay = selectedOption ? filteredData : spendingData;

    const handleDelete = (idToDelete) => {
        const spendingCopy = JSON.parse(JSON.stringify(spendingData));
        const newSpendingData = spendingCopy.filter(entry => {
            return entry.id !== idToDelete;
        });
        set(spendingRef, newSpendingData);
    }

    return (
        <ol className={`spending-list ${animate ? "animate" : ""}`}>
            <div className="list-headings">
                <p>Date</p>
                <p>Place</p>
                <p className="amount">Amount</p>
            </div>
            {
                dataToDisplay.map(entry => <SpendingLog key={entry.id} entry={entry} handleDelete={handleDelete} />)
            }
        </ol>
    )
}

export default SpendingList;