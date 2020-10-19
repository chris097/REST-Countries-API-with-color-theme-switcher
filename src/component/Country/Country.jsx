import React, { useState, useEffect} from "react";
import axios from "axios";
import "./Country.css";
import mapp from "./img/hacker3.jpg";

const Country = () => {
    const [ country, setCountry ] = useState([])

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(res => 
            (
                // console.log(res.data)
                setCountry(res.data)
            ))

    }, [])
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
                    
                        {/* <img src={mapp} alt=""/>
                        <div className="country-id">
                        <h4>Nigeria</h4>
                        <h4>Population: <span>490,0494</span></h4>
                        <h4>Region: <span>Africa</span></h4>
                        <h4>Capital: <span>Abuja</span></h4>
                        </div> */}
                    {country.map(name => (
                        <>
                        <div className="cards">
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