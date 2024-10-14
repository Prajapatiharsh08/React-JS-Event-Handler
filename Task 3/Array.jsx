import React, { useState } from 'react'

export default function Array() {
    const [profiles, setProfiles] = useState([
        {
            name: "Harsh",
            age: 19,
            contact: 8564752838,
            email: "Har123@gmail.com"
        }
    ]);

    return (
        <div>
            {
                profiles.map((profile, i) => (
                    <div key={i}>
                        <h1>Name : {profile.name}</h1>
                        <h1>Age : {profile.age}</h1>
                        <h1>Contact : {profile.contact}</h1>
                        <h1>Email : {profile.email}</h1>
                    </div>
                ))
            }

        </div>
    )
}
