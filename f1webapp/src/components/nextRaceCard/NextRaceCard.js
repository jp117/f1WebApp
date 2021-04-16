import React from "react";
import "./NextRaceCard.css";

function NextRaceCard(props) {
    console.log(props.localTime.getTimezoneOffset());
    let raceDate = new Date(props.nextRace.date + "T" + props.nextRace.time);
    console.log(raceDate);
    return (
        <div className='nextRaceCard'>
            <div className='container'>
                <div className='location'>NEXT RACE: {props.nextRace.Circuit.Location.country}</div>
                <div className='time'>
                    <span className='localtime'>{raceDate.toLocaleString()} Your Time</span>
                </div>
            </div>
        </div>
    );
}

export default NextRaceCard;
