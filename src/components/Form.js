import { useState } from "react";

const Form = () => {

    const today = new Date;
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const currentDate = `${year}-${month}-${day}`;

    const [date, setDate] = useState(currentDate);
    const [place, setPlace] = useState("");
    const [amount, setAmount] = useState("0.00");
    const [tag, setTag] = useState("");

    return (
        <form>
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" id="date" max={currentDate} value={date} onChange={e => setDate(e.target.value)} required />
            <label htmlFor="place">Place: </label>
            <input type="text" name="place" id="place" value={place} onChange={e => setPlace(e.target.value)} required />
            <label htmlFor="amount">Amount: </label>
            <input type="number" name="amount" id="amount" min="0.01" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} required />
            <label htmlFor="tag">Tag: </label>
            <input type="text" name="tag" id="tag" value={tag} onChange={e => setTag(e.target.value)} />
            <button>Log Spending</button>
        </form>
    )
}

export default Form;