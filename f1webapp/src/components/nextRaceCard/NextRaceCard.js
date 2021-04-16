import React from "react";
import "./NextRaceCard.css";

function NextRaceCard(props) {
    console.log(props.localTime.getTimezoneOffset());
    return (
        <div className='nextRaceCard'>
            <div className='container'>
                {props.nextRace.Circuit.Location.country}
                {props.nextRace.date}
                <div className='time'>
                    <p className='UTCTime'>{props.nextRace.time.slice(0, -4)} UTC</p>
                    <p className='localTime'>your time</p>
                </div>
            </div>
        </div>
    );
}

export default NextRaceCard;
