import app from "../config/firebase-config.js";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const FilterCategories = () => {
    const [spendingData, setSpendingData] = useState([]);
    const { selectedCategory } = useParams();

    const categories = ["all", "byMonth", "byYear", "byTag"];
    const linkTexts = ["View All", "View by Month", "View by Year", "View by Tag"];
    
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
        <nav>
            <ul>
                {
                    categories.map((category, index) => {
                        return (
                            <li key={category}>
                                <Link to={selectedCategory !== category ? category : "/viewLogs"}>{linkTexts[index]}</Link>
                                {selectedCategory === category ? <Outlet context={spendingData} /> : null}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default FilterCategories;