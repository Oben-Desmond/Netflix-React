
import { useEffect, useState, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"



function Practice() {


    const location = useLocation();

    function handleClick() {
        console.log(location)
    }

    return (
        <div className="p-4">

            <button onClick={handleClick} className="p-3 mt-5 rounded-full bg-blue-500 block">
                Click
            </button>
        </div>
    )
}


export default Practice