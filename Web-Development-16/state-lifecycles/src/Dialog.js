import React from "react";
// this is how we import a css document in react:
import "./Dialog.css";

export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    openDialog = () => {
        this.setState({
            isOpen: true,
        });
    };

    closeDialog = () => {
    this.setState({
        isOpen: false,
       });
    };

    render() {
        return(
        <div>
            {/*This is how you create a comment in js */}
           <button onClick={this.openDialog}>Click for Popup!</button>
           {this.state.isOpen && (
           <div className="dialog">
               <button onClick={this.closeDialog}>x</button>
               Hey, I am now here</div>
            )}
        </div>
        );
    }
}