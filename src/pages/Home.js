import Header from "../components/Header.js";
import Main from "../components/Main.js"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header>
                <h1>Your Spending Tracker</h1>
            </Header>
            <Main>
                <section className="intro">
                    <p>Ever wondered where all your hard-earned money went? What exactly ate up that salary? Well look no further, your Spending Tracker is here!</p>
                    <p>Simply log each purchase with the date, place, and amount, along with the optional tag and some notes to remind yourself, and you need never forget an expense again. The app currently permits filtering logs by month, year, or tag. More features coming soon!</p>
                    <p><strong>Important Note:</strong> Please understand that the Spending Tracker app is currently under development. This is a public demo and is intended as a demonstration of the app's capabilities only. The data submitted is not private, please do not include any senstitive personal information. Authentication will be added at a later date.</p>
                </section>
                <Link to="/addLog" className="get-started">Get Started!</Link>
            </Main>
        </>
    )
}

export default Home;