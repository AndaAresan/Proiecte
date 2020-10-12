import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// JS se importa doar asa, ex mai jos:
import "./index.css";

const user = {
  firstName: "Anda",
  lastName: "Aresan"
}

// ReactDOM.render(
//   <React.StrictMode>
//     <h1>Hello fancy react app! {2+2}</h1>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const formatName = (user) => {
  return user.firstName + " " + user.lastName;
};

const now = new Date();

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, what's the clock?</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById("root"));
// };

// setInterval(tick, 1000);

// ReactDOM.render(
//   <h1>
//     {/* {user.firstName} {user.lastName} */}
//     {/* {formatName(user)} */}
//     {now.toLocaleTimeString()}
//   </h1>,
//   document.getElementById("root")
// );

const imageUrl = "https://images.unsplash.com/photo-1583583443179-7af52c3c9eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"

// ReactDOM.render(
//   // Pentru a face un class in JSX, trebuie sa folosim className
//   <div className="container">
//   <img src={imageUrl}/>
//   <img src="https://images.unsplash.com/photo-1601218533355-cf3dc8e9f907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>
//   </div>,
//   document.getElementById("root")
// );

// Varianta scurta:
const element = <h1 className="container">Hello!</h1>

// Varianta lunga (nu o folosim, ineficienta):
// const element = React.createElement(
//   'h1',
//   {
//     className: "container"
//   },
//   "Hello!"
// );

ReactDOM.render(element, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
