import React from 'react'


export default function About() {
let myStyle={
    backgroundColor:"red",
    color:"blue"
}
    return (
        <div style={myStyle}>
            <h1>hello world </h1>
            <button className="btn btn-primary my-3" >Enable Dark Mode</button>
        </div>
    )
}
