import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navElements'>
                <a href='#'>Home</a>
                <a href='#'>Schedule</a>
                <a href='#'>Next Race</a>
                <a href='#'>History</a>
                <a href='#'>Standings</a>
            </div>
        </div>
    );
}

export default Navbar;
