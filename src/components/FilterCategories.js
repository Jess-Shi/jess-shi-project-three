import app from "../config/firebase-config.js";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

const FilterCategories = () => {
    const [spendingData, setSpendingData] = useState([]);
    const [dataReceived, setDataReceived] = useState(false);
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
            setDataReceived(true);
        });
        // eslint-disable-next-line
    }, []);
    
    return (
        <>
            {
                dataReceived
                    ?
                    <nav className="filters-nav">
                        <ul>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <li key={category} className="filter-category">
                                            <Link to={selectedCategory !== category ? category : "/viewLogs"}>{linkTexts[index]}</Link>
                                            {selectedCategory === category ? <Outlet context={[spendingData, spendingRef, set]} /> : null}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav>
                    :
                    <p>Unable to connect to the database at the moment. Please try again later, thank you.</p>
            }
        </>
    )
}

export default FilterCategories;