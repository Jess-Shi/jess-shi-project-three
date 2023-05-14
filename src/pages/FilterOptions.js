import app from "../config/firebase-config.js";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const FilterOptions = () => {

    const [spendingData, setSpendingData] = useState([]);
    const { selectedCategory, selectedOption } = useParams();
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

    const options = {
        byMonth: [],
        byYear: [],
        byTag: [],
    }

    spendingData.forEach(entry => {
        const month = entry.month;
        const year = entry.year;
        const tag = entry.tag;

        if (!options.byMonth.includes(month)) {
            options.byMonth.push(month);
        }
        if (!options.byYear.includes(year)) {
            options.byYear.push(year);
        }
        if (!options.byTag.includes(tag)) {
            options.byTag.push(tag);
        }
    });

    return (
        <ul>
            {
            options[selectedCategory].map(option => {
                return (
                    <li key={option}>
                        <Link to={selectedOption !== option ? option : `/viewLogs/${selectedCategory}`}>{option}</Link>
                        {selectedOption === option ? <Outlet context={spendingData} /> : null}
                    </li>
                    )
                })
            }    
        </ul>
    )
}

export default FilterOptions;