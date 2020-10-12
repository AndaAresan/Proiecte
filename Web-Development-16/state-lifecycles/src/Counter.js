import React from "react";

// Constructorii din react primesc un singur parametru: (props)!!!
// super(props) - avem acces la clasa parite, putem accesa metode, proprietati si constructori, daca nu l-am folosi la constructori, am avea o eroare
// this.state - toate componentele clasa il au, tot timpul v-a fi un obiect, deci folosim {}, il putem folosi oriunde inauntrul componentei noastre
// daca nu folosim export.default, nu-l putem folosi in alt document js

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        // this is the initial state/snapshot of the component
        this.state = {
            counter: 0,
        };
    }

    // obiectul ii spune componentei ce descrie urmatoare fotografie, noi vrem ca ea sa fie un numar mai mare decat 0 si unul mai mic:

    increment = () => {
        this.setState((previousState) => {
            return {
                counter: previousState.counter + 1,
            };
        });
    };

    decrement = () => {
        this.setState((previousState) => {
            return {
                counter: previousState.counter - 1,
            }
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                {this.state.counter}
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}
