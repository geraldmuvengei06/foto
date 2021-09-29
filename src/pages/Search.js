import React from "react"
import { Outlet, useParams } from "react-router-dom"

let Search = () => {
    const { search } = useParams(); 
    return (
        <div>
            <p>Searching for {search}</p>
            <Outlet />
        </div>
    )
}

export default Search