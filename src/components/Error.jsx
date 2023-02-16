import React from "react";
import image from '../error 404.png';

export default function Error(){
    return (
        <div>
            <h1 style={{color: 'white', fontSize: '60px', position: "absolute"}}>ERROR</h1>
            
            <img src={image} alt="" />
        </div>
    )
}