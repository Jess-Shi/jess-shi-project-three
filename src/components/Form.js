import app from "../config/firebase-config.js";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const currentDate = `${year}-${month}-${day}`;

    const [date, setDate] = useState(currentDate);
    const [place, setPlace] = useState("");
    const [amount, setAmount] = useState("");
    const [tag, setTag] = useState("");
    const [spendingData, setSpendingData] = useState([]);

    const database = getDatabase(app);
    const spendingRef = ref(database, "spending");

    useEffect(() => {

        onValue(spendingRef, (snapshot) => {
            if (snapshot.exists()) {
                setSpendingData(snapshot.val());
            } else {
                setSpendingData([]);
            }
        });
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const [year, month] = date.split("-");
        const newEntry = {
            id: uuidv4(),
            date: date,
            place: place,
            amount: parseFloat(amount).toFixed(2),
            month: `${month}-${year}`,
            year: year,
            tag: tag,
        }

        let spendingCopy = JSON.parse(JSON.stringify(spendingData));
        const insertIndex = spendingCopy.findIndex(entry => newEntry.date < entry.date);
        if (insertIndex === -1) {
            spendingCopy.push(newEntry);
        } else {
            spendingCopy = [...spendingCopy.slice(0, insertIndex), newEntry, ...spendingCopy.slice(insertIndex)];
        }
        set(spendingRef, spendingCopy);

        setPlace("");
        setAmount("");
        setTag("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" id="date" max={currentDate} value={date} onChange={e => setDate(e.target.value)} required />

            <label htmlFor="place">Place: </label>
            <input type="text" name="place" id="place" placeholder="e.g. Tim Hortons" value={place} onChange={e => setPlace(e.target.value)} required />

            <label htmlFor="amount">Amount: </label>
            <input type="number" name="amount" id="amount" min="0.01" step="0.01" placeholder="e.g. 2.99" value={amount} onChange={e => setAmount(e.target.value)} required />

            <label htmlFor="tag">Tag: </label>
            <input type="text" name="tag" id="tag" placeholder="e.g. Food and Drink" value={tag} onChange={e => setTag(e.target.value)} />
            
            <button>Log Spending</button>
        </form>
    )
}

export default Form;