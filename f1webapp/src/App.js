import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NextRaceCard from "./components/nextRaceCard/NextRaceCard";
import DriverStandings from "./components/driverStandings/DriverStandings";
import ConstructorStandings from "./components/constructorStandings/ConstructorStandings";
import { useState } from "react";

function App() {
    const [localTime] = useState(new Date());

    return (
        <div className='App'>
            <div className='container'>
                <header>
                    <div className='title'>F1RaceFans.com</div>
                </header>
                {/* <Navbar /> */}
                <NextRaceCard localTime={localTime} />
                <DriverStandings />
                <ConstructorStandings />
            </div>
        </div>
    );
}

export default App;
