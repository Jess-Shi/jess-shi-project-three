import Header from "../components/Header.js";
import Main from "../components/Main.js";
import FilterCategories from "../components/FilterCategories.js";

const ViewLogs = () => {
    return (
        <>
            <Header>
                <h2>Your Spending History</h2>
            </Header>
            <Main>
                <FilterCategories />
            </Main>
        </>
    )
}

export default ViewLogs;