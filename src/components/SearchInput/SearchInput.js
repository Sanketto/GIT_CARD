import React, { useEffect, useState } from "react";
import './search-input.css'
import axios from "axios";

export default function SearchInput({setUserData, setError}){
    const [input, setInput] = useState("");

    const getUserData = async(e)=>{
        e.preventDefault();
        await axios.get(`https://api.github.com/users/${input}`)
        .then(res=>{
            setUserData(res.data);
            setError("");
            setInput("")
        })
        .catch(err=>{
            setError(err["response"].status);
            setInput("");
            setUserData({})
        })
    }

    const setInputData =(e)=>{
        setInput(e.target.value)
    }
    return(
        <div className="form-container">
            <form onSubmit={getUserData}>
                <div>
                    <label htmlFor="name">Enter User Name:</label>
                    <input id="name" type="text"
                        value={input}
                        onChange={setInputData}
                        required
                    />
                </div>
                <div className="btn-submit">
                    <button type="submit">Get Info</button>
                </div>
            </form>
        </div>
    );
}