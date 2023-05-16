import { useOutletContext, useParams, Link, Outlet } from "react-router-dom";

const FilterOptions = () => {
    const spendingData = useOutletContext();
    const { selectedCategory, selectedOption } = useParams();

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
        if (tag && !options.byTag.includes(tag)) {
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