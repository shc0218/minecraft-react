import {useParams} from "react-router-dom";
import React from 'react';
import {Link} from "react-router-dom";

function UserInfo() {
    const {username} = useParams();
    return (
        <div>
            <p>{username}</p>
            <Link to="/home">back</Link>
        </div>
    );
}

export default UserInfo;
