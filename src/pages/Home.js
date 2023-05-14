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
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eligendi alias voluptatum dolor dolorem ex nostrum! Fugiat explicabo, obcaecati laudantium velit ipsum non ducimus, quidem sapiente reiciendis dolorem nihil voluptas.</p>
                <Link to="/addLog">Get Started!</Link>
            </Main>
        </>
    )
}

export default Home;