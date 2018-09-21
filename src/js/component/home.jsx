import React from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';


//create your first component
export class TrafficLight extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            red: false,
            yellow: false,
            green: false
        };
    }
    
    updateLight(light) {
        if(light === "red") {
            this.setState((state) => {
                return {
                    red: true,
                    yellow: false,
                    green: false
                };
            });
        }
        else if(light === "yellow") {
            this.setState((state) => {
                return {
                    red: false,
                    yellow: true,
                    green: false
                };
            });
        }
        else if(light === "green") {
            this.setState((state) => {
                return {
                    red: false,
                    yellow: false,
                    green: true
                };
            });
        }
    }
    
    checkSignal(bool) {
        if(bool) return " selected";
        return "";
    }    
    
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-3 mt-2 py-2" style={{ backgroundColor: "black" }}>
                        <div className="row justify-content-center">
                            <div onClick={()=> this.updateLight("red")}
                                className={"col-8 my-2 red" + this.checkSignal(this.state.red)}></div>
                            <div onClick={()=> this.updateLight("yellow")}
                                className={"col-8 my-2 yellow" + this.checkSignal(this.state.yellow)}></div>
                            <div onClick={()=> this.updateLight("green")}
                                className={"col-8 my-2 green" + this.checkSignal(this.state.green)}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
