import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NextRaceCard from "./components/nextRaceCard/NextRaceCard";
import { useState, useEffect } from "react";

function App() {
    const [localTime, setLocalTime] = useState(new Date());

    return (
        <div className='App'>
            <div className='container'>
                <Navbar />
                <NextRaceCard localTime={localTime} />
            </div>
        </div>
    );
}

export default App;
