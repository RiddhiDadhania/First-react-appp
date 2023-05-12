import React from "react";

// function Greet() {
//    return <h1>Hello Riddhi</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1> function base {props.name}  props component {props.heroName}</h1>
            {props.children}
        </div>
    )

}

export default Greet