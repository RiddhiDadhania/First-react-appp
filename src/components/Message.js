import React, { Component } from "react";

class Meassage extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }


    render() {
        return (
            <>
                <h1>{this.state.message}</h1>
                <button className="btn" onClick={() => this.changeMessage()}>subscrib</button>
            </>
        )
    }
}

export default Meassage