import { useParams, Link, Outlet } from "react-router-dom";

const FilterCategories = () => {

    const categories = ["all", "byMonth", "byYear", "byTag"];
    const linkText = ["View All", "View by Month", "View by Year", "View by Tag"];
    const { selectedCategory } = useParams();

    return (
        <nav>
            <ul>
                {
                    categories.map((category, index) => {
                        return (
                            <li key={category}>
                                <Link to={selectedCategory !== category ? category : "/viewLogs"}>{linkText[index]}</Link>
                                {selectedCategory === category ? <Outlet /> : null}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default FilterCategories;