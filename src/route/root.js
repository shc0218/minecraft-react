import React from 'react';
import {Link} from "react-router-dom";

function Root() {
    return <h2>
        <Link to="/home">Login</Link>
    </h2>;
}

export default Root;
