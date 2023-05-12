import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <>
                <h1>Class base {this.props.name} props component {this.props.heroName}</h1>
                {/* <h1> component</h1> */}
            </>
        )
    }
}

export default Welcome