import React from "react";
import './card.css'

export default function Card({user}) {
    return (
        <div className="card-container">
            <div id="left">
                <div className="img-container">
                    <img src={user.avatar_url || "https://static.vecteezy.com/system/resources/previews/009/734/564/large_2x/default-avatar-profile-icon-of-social-media-user-vector.jpg"} alt="user" />
                </div>
                <div>
                    <h2>{user.name}</h2>
                </div>
            </div>
            <div id="right">
                <section>
                    <label>Username:</label>
                    <p>{user.login}</p>
                </section>
                <section>
                    <label>Public repos:</label>
                    <p>{user.public_repos}</p>
                </section>
                <section>
                    <label>Public gists:</label>
                    <p>{user.public_gists}</p>
                </section>
                <section>
                    <label>Craeted At:</label>
                    <p>{user.created_at}</p>
                </section>
            </div>
        </div>
    )
}