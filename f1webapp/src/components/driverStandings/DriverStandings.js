import React from "react";
import "./DriverStandings.css";
import "../commonCSS.css";
import { useState, useEffect } from "react";

function DriverStandings() {
    const [cWDC, setcWDC] = useState();

    useEffect(() => {
        fetch("http://ergast.com/api/f1/current/driverStandings.json")
            .then((res) => res.json())
            .then((result) => {
                setcWDC(result.MRData.StandingsTable.StandingsLists[0].DriverStandings);
            });
    }, []);
    if (cWDC !== undefined) {
        return (
            <div className='driverStandings'>
                <h1>WDC Current Standings</h1>
                <div className='container'>
                    {cWDC.map((driver) => (
                        <div key={driver.position} className='driverTag'>
                            <p className='pos'>{driver.position}</p>
                            <div className={`divider ${driver.Constructors[0].constructorId}`}></div>
                            <div className='driverInfo'>
                                <p className='name'>
                                    <span className='firstName'>{driver.Driver.givenName} </span>
                                    <span className='lastName'>{driver.Driver.familyName}</span>
                                </p>
                                <p className='team'>
                                    {driver.Constructors[0].name} |
                                    <span className='pts'> Points : {driver.points}</span>
                                </p>
                            </div>
                            <img src={`/imgs/logos/${driver.Constructors[0].constructorId}Logo.png`} alt='' />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default DriverStandings;
