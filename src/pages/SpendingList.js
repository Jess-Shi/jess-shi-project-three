import SpendingLog from "../components/SpendingLog.js";
import { useOutletContext, useParams } from "react-router-dom";

const SpendingList = () => {
    const spendingData = useOutletContext();
    const { selectedOption } = useParams();
    
    const filteredData = spendingData.filter(entry => {
        return entry.month === selectedOption || entry.year === selectedOption || entry.tag === selectedOption;
    });
    const dataToDisplay = selectedOption ? filteredData : spendingData;

    return (
        <ol>
            {
                dataToDisplay.map(entry => <SpendingLog key={entry.id} date={entry.date} place={entry.place} amount={entry.amount} tag={entry.tag} />)
            }
        </ol>
    )
}

export default SpendingList;