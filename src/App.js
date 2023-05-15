import Home from './pages/Home.js';
import AddLog from './pages/AddLog.js';
import ViewLogs from './pages/ViewLogs.js';
import FilterOptions from './pages/FilterOptions.js';
import SpendingList from './pages/SpendingList.js';
import Footer from './components/Footer.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

const App = () => {
    const location = useLocation();

    return (
        <div className="app wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addLog" element={<AddLog />} />
                <Route path="/viewLogs" element={<ViewLogs />}>
                    <Route path=":selectedCategory" element={location.pathname === "/viewLogs/all" ? <SpendingList /> : <FilterOptions />}>
                        <Route path=":selectedOption" element={<SpendingList />} />
                    </Route>
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;