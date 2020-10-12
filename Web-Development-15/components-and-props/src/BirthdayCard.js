import React from "react";

// props e o constanta si nu poate fi niciodata modificat!!!
const BirthdayCard = (props) => {
    return <div 
    style={{
        width: "150px",
        height: "200px",
        backgroundColor: props.gender === "male" ? "lightblue" : "pink",
    }}
    >
    <h1 style={{color: "white"}}>
        Happy {props.age}th birthday {props.name}!
    </h1>
    </div>
};

export default BirthdayCard;