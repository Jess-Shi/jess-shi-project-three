import Header from "../components/Header.js";
import Navigation from "../components/Navigation.js";
import Main from "../components/Main.js";
import Form from "../components/Form.js";

const AddLog = () => {
    return (
        <>
            <Header>
                <Navigation />
                <h2>Track Your Spending</h2>
            </Header>
            <Main>
                <Form />
            </Main>
        </>
    )
}

export default AddLog;