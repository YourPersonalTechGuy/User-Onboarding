import React from "react";

function User(props){
    const{ values } = props

    return(
        <div className="User-Container">
            <h2>{`${values.first_name} ${values.last_name}`}</h2>
            <p>{`Email: ${values.email}`}</p>
            <p>{`Date Created: ${values.createdAt === undefined ? "Unknown" : values.createdAt.slice(0,10)}`}</p>
        </div>
    )
}

export default User;