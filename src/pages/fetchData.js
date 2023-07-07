import { useState} from "react";

const useFetchGet = async (url) => {
    const [data, setData] = useState([]);
    try {
        const result = await fetch(url);
        const parsedResponse = await result.json();
        setData(parsedResponse);
    } catch (error) {
        console.log("Error", error);
    }

    return [data];
}

export {useFetchGet};