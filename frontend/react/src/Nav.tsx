import React from "react";
import { Link } from "react-router-dom";


export default function Nav() {
    return <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page-1">Page 1</Link></li>
            <li><Link to="/page-1/sub-page">Sub Page 1</Link></li>
            <li><Link to="/page-2">Page 2</Link></li>
            <li><Link to="/fetch">Fetching Page</Link></li>
            <li><a href='http://localhost:8000/server/logout'>Logout</a></li>
        </ul>
    </nav>
}