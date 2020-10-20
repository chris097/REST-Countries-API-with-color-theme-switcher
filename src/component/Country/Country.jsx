import React from "react";
import "./Country.css";

const Country = ({country}) => {
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
            <div className="cards-container">
                <div className="cards-content">
                    {country.map(name => (
                        <>
                        <div className="cards" key={name}>
                        <img src={name.flag} alt=""/>
                        <div className="country-id">
                        <h4>{name.name}</h4>
                        <h4>Population: <span>{name.population}</span></h4>
                        <h4>Region: <span>{name.region}</span></h4>
                        <h4>Capital: <span>{name.capital}</span></h4>
                        </div> 
                        </div>
                        </>
                    ))}
                    
                </div>
            </div>
            <div className="country-btn">
                <button type="submit">Read More</button>
            </div>
        </div>
    )
}

export default Country;