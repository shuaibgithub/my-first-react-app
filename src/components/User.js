import React, { Component } from "react";
import { directive } from "@babel/types";

// export default class User extends Component {
//     render() {
//         return (<div>
//           <p>User: <b>Alice</b></p>
//         </div>)
//       }
// }

// function User(props) {
//     console.log(props)
//     return <p>User: <b>Alice</b></p>
// }
// class User extends Component {

// }
const User = props => {
    console.log(props)
    // return <p>User: <b>{props.name}</b></p>
    // return <p>User: <b>{props.name} a.k.a {props.heroName}</b></p>
    
    return (//To split jsx to multiple line
        // we can return only one HTML element, so we have to enclose
        // all our content in one div wrapper tag
        <div> 
            <p>User: <b>{props.name} a.k.a {props.heroName}</b></p>
            {props.children}
        </div>
    )
}

export default User