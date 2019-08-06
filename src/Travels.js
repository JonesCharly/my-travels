import React from "react";
import Travel from "./Travel";
import ny from "./ny.jpg"

const travels = [
    {
        city: "Paris",
        country: "France",
        km:"165km"
    },
    {
        city: "New-York",
        country: "USA",
        photo: {ny}, 
        km:"165km"
    },
    {
        city: "Tokyo",
        country: "Japan",
        km:"165km"
    },
    {
        city: "Moscou",
        country: "Mother Russia",
        km:"165km"
    },
    {
        city: "Berlin",
        country: "Allemagne",
        km:"165km"
    },
]

const Travels = () => (
    <div>
        {travels.map( travels => (
            <Travel {...travels}/>
        ))}
    </div>
  );
  
export default Travels;