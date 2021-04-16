import React from "react";
import "./NextRaceCard.css";
import { useState, useEffect } from "react";

function NextRaceCard(props) {
    const [nextRace, setNextRace] = useState();

    useEffect(() => {
        fetch("http://ergast.com/api/f1/current/next.json")
            .then((res) => res.json())
            .then((result) => {
                setNextRace(result.MRData.RaceTable.Races[0]);
            });
    }, []);
    if (nextRace !== undefined) {
        let raceDate = new Date(nextRace.date + "T" + nextRace.time);
        return (
            <div className='nextRaceCard'>
                <div className='container'>
                    <div className='location'>NEXT RACE: {nextRace.Circuit.Location.country}</div>
                    <div className='time'>
                        <span className='localtime'>{raceDate.toLocaleString()} Your Time</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='nextRaceCard'>
                <div className='container'>LOADING NEXT RACE DATA</div>
            </div>
        );
    }
}

export default NextRaceCard;
