import React, { useState, useEffect } from "react";
import Header from "./component/Header/Header"
import "./index.css";
import axios from "axios";
import "./component/Utilities.css"
import Country from "./component/Country/Country";

const App = () =>{
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
        <>
        <Header />
        <Country country={country} />
        </>
    )
}

export default App;