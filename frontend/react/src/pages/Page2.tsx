import React, {useEffect, useState} from "react";


const fetchData = async (callback: (d: any) => void) => {
    const response = await fetch('/api/');
    const data = await response.json();
    callback(data);
    return data;
}

export default function Page2() {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData(setData);
    }, [])

    return <div>
        <div>This is page 2!</div><br/>
        Fetched data: {JSON.stringify(data)}
    </div>;
}