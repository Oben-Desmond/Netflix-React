
import { useEffect, useState } from "react"
import mother from "../data/mother.mp4"
import { useLocation } from "react-router-dom"


function VideoPlayer() {
    const [movie, setMovie] = useState(undefined)
    const location = useLocation()

    useEffect(() => {
        setMovie(location.state)
    }, [])


    return (
        <div>
            <iframe
                style={{ height: "100vh", width: "100%" }}
                src={movie?.movieURL}
                allowfullscreen></iframe>
        </div>
    )
}

export default VideoPlayer