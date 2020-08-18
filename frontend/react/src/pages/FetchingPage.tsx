import React, {useEffect, useState} from "react";


const fetchData = async (path: string, callback: (d: any) => void) => {
    const response = await fetch(path);
    const data = await response.json();
    callback(data);
    return data;
}

export default function FetchingPage() {
    const [noAuthData, setNoAuthData] = useState();
    const [authData, setAuthData] = useState();

    useEffect(() => {
        fetchData('/api/no-auth/', setNoAuthData);
        fetchData('/api/auth/', setAuthData);
    }, [])

    return <div>
        <div>This fetches data from two APIs!</div><br/>
        Data from unauthenticated API: {JSON.stringify(noAuthData)}<br/>
        Data from authenticated API: {JSON.stringify(authData)}
    </div>;
}