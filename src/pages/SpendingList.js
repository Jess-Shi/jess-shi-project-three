import SpendingLog from "../components/SpendingLog.js";
import { useOutletContext } from "react-router-dom";

const SpendingList = () => {

    const spendingData = useOutletContext();

    return (
        <ol>
            {
                spendingData.map(entry => <SpendingLog key={entry.id} date={entry.date} place={entry.place} amount={entry.amount} tag={entry.tag} />)
            }
        </ol>
    )
}

export default SpendingList;