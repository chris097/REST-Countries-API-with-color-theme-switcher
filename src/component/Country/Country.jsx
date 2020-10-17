import React from "react";
import "./Country.css";

const Country = () => {
    return(
        <div className="container">
            <div className="search">
                <div className="search-input">
                    <input type="search" name="country" id="country" placeholder="Search for a country..."/>
                </div>
                <div className="option">
                    <select name="country" id="country">
                        <option value="">Filter by Region</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Country;