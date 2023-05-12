import SpendingLog from "./SpendingLog.js";

const SpendingList = ({ spendingData }) => {

    return (
        <ol>
            {
                spendingData.map(entry => <SpendingLog key={entry.id} date={entry.date} place={entry.place} amount={entry.amount} tag={entry.tag} />)
            }
        </ol>
    )
}

export default SpendingList;