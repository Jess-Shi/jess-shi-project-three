const SpendingLog = ({date, place, amount, tag}) => {

    return (
        <li>
            <p>{date}</p>
            <p>{place}</p>
            <p>{amount}</p>
            <p>{tag}</p>
        </li>
    )
}

export default SpendingLog;