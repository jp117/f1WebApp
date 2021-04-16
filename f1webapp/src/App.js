import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NextRaceCard from "./components/nextRaceCard/NextRaceCard";
import { useState, useEffect } from "react";

function App() {
    const [nextRace, setNextRace] = useState();
    const [localTime, setLocalTime] = useState(new Date());

    useEffect(() => {
        fetch("http://ergast.com/api/f1/current/next.json")
            .then((res) => res.json())
            .then((result) => {
                setNextRace(result);
            });
    }, []);
    if (nextRace != undefined) {
        return (
            <div className='App'>
                <div className='container'>
                    <Navbar />
                    <NextRaceCard nextRace={nextRace.MRData.RaceTable.Races[0]} localTime={localTime} />
                </div>
            </div>
        );
    } else {
        return (
            <div className='App'>
                <h1>Still loading</h1>
            </div>
        );
    }
}

export default App;
