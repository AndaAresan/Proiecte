import React from "react";
import moment from "moment-timezone";

// props ne ajuta sa alegem ce time-zone vrem sa vedem
export const Clock = (props) => {
return <h1>The time is {moment().tz(props.timezone).format()}</h1>
};
