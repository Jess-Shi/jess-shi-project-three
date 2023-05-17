import Header from "../components/Header.js";
import Main from "../components/Main.js";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <Header>
                <h2>404 Not Found</h2>
            </Header>
            <Main>
                <Link to="/">Return to Home</Link>
            </Main>
        </>
    )
}

export default ErrorPage;