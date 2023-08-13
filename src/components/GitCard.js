import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput/SearchInput";
import Card from "./Card/Card";
import '../App.css';
import axios from "axios";
import Error from "./Error/Error";

export default function GitCard(){
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    
    const setUserData = (data)=>{
        setUser(data)   
    }
    console.log(user);
    return<>
        <div className="container">
           {error && <Error err={error}/>}
            <SearchInput setUserData={setUserData} setError={setError}/>
            <Card user={user} />
        </div>
    </>
}