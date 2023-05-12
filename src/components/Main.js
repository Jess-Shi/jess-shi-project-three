import Form from "./Form.js";
import SpendingList from "./SpendingList.js";
import app from "../config/firebase-config.js";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useState, useEffect } from "react";

const Main = () => {

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

    return (
        <main>
            <Form spendingData={spendingData} spendingRef={spendingRef} set={set} />
            <SpendingList spendingData={spendingData} />
        </main>
    )
}

export default Main;