import React from "react";
import './error.css'
export default function Error({err}){
    return<>
        <div id="error">
            <h2>{(err === 404)? "User not found!!!" : "Something went wrong"}</h2>
        </div>
    </>
}