import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
    const data = useLoaderData()
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Jaguruth-N').then(response => response.json()).then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // })
    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
                Github Followers:{data.followers}
            </div>
            <img src={data?.avatar_url} alt="Git Picture" className="w-[300px] m-auto" />
        </>
    )
}
export default GitHub;

export const githubInfoLoad = async () => {
    const response = await fetch('https://api.github.com/users/Jaguruth-N')
    return response.json()
}