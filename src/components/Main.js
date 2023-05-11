import Form from "./Form.js";
import SpendingList from "./SpendingList.js";
import app from "../config/firebase-config.js";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useState, useEffect } from "react";

const Main = () => {

    const [spendingData, setSpendingData] = useState([]);

    const database = getDatabase(app);
    const spendingRef = ref(database, "spending");

    // set(spendingRef, [
    //     {
    //         id: "sdjf039",
    //         date: "2022-10-01",
    //         place: "Tim Hortons",
    //         amount: 12.99,
    //         month: "10",
    //         year: "2022",
    //         tag: "",
    //     }
    // ])

    useEffect(() => {

        onValue(spendingRef, (snapshot) => {

            if (snapshot.exists()) {

                setSpendingData(snapshot.val());
            }
        });
    }, []);

    return (
        <main>
            <Form />
            <SpendingList />
        </main>
    )
}

export default Main;