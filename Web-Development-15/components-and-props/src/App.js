import React from "react";
import { Clock } from './Clock';
import BirthdayCard from "./BirthdayCard";

// instead of using a div everytime we want to add our codes we can use <> </>:
const App = (props) => {
    return(
    <>
    <Clock timezone="America/Los_Angeles" />
    <Clock timezone="Asia/Tokyo" />
    <Clock timezone="Pacific/Guam" />
    <BirthdayCard gender="female" name="Anda" age="23" />
    <BirthdayCard gender="male" name="Cosmin" age="25" />
    <BirthdayCard gender="female" name="Carina" age="21" />
    <BirthdayCard gender="male" name="Bogdan" age="23" />
    </>
    );
};

export default App;