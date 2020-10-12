// Add "", Components" after import React when you use classes
import React from 'react'; 
import ReactDOM from 'react-dom';
import App from "./App";
// import { Clock } from './Clock';
// import BirthdayCard from "./BirthdayCard";
import * as serviceWorker from './serviceWorker';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// We can also use this function for the same outcome:
// const Welcome = props => <h1>Hello, {props.name}</h1>;

// We can also use classes for the same outcome(they have to start with a capital letter "A"):
// class Welcome extends Component {
//   render () {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }



ReactDOM.render(
  <React.StrictMode>
    {/* <Welcome name="Anda" />
    <Welcome name="Andrei" />
    <Welcome name="Cosmin" /> */}
    {/* <Clock timezone="America/Los_Angeles" />
    <Clock timezone="Asia/Tokyo" />
    <Clock timezone="Pacific/Guam" />
    <BirthdayCard gender="female" name="Anda" age="23" />
    <BirthdayCard gender="male" name="Cosmin" age="25" />
    <BirthdayCard gender="female" name="Carina" age="21" />
    <BirthdayCard gender="male" name="Bogdan" age="23" /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
