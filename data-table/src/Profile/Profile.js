import React from "react";
import '../Profile/Profile.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({person}) => (
    <div className="profile__bg">
        <div className="profile__container">
         <p className="center_p">Profile</p>
         <div className="profile__info">
            <p><span>Selected ptofile:</span>  {person.firstName} {person.lastName}</p>
         <p><span>Description: </span> {person.description}</p>
         <p><span>Adress:</span>  {person.adress.city}</p>
         <p><span>City: </span> {person.adress.city}</p>
         <p><span>State: </span> {person.adress.state}</p>
         <p><span>Index: </span> {person.adress.streetAddress}</p>
         </div>
         </div>
    </div>
)