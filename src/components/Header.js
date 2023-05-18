import Navigation from "./Navigation.js";

const Header = ({ children }) => {
    return (
        <header>
            <Navigation />
            {children}
        </header>
    )
}

export default Header;