import React from "react";
import "./ConstructorStandings.css";
import "../commonCSS.css";
import { useState, useEffect } from "react";

function ConstructorStandings() {
    const [cWCC, setcWCC] = useState();

    useEffect(() => {
        fetch(`http://ergast.com/api/f1/current/constructorStandings.json`)
            .then((res) => res.json())
            .then((result) => {
                setcWCC(result.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
            });
    }, []);

    if (cWCC !== undefined) {
        console.log(cWCC);
        return (
            <div className='constructorStandings'>
                <h1>WCC Current Standings</h1>
                <div className='container'>
                    {cWCC.map((con) => (
                        <div key={con.position} className='conTag'>
                            <p className='pos'>{con.position}</p>
                            <div className={`divider ${con.Constructor.constructorId}`}></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return <div></div>;
    }
}

export default ConstructorStandings;
