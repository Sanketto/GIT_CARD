import React from "react";
import './error.css'
export default function Error({err}){
    return<>
        <div id="error">
            <h2>{err}</h2>
        </div>
    </>
}