import React from "react";
import trollFace from "../images/troll-face.png"
export default function Header(){
    return (
        <div className="header">
            {/* <img src = {require("../images/troll-face.png")}/> */}
            <img src = {trollFace} className="header--img"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Project - Yang</h4>
        </div>
    )
}