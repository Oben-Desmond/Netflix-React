
import mother from "../data/mother.mp4"


function VideoPlayer() {

    return (
        <div>
            <video
                controls
                src={mother}
                autoPlay
                className="w-full h-screen object-fit"></video>
        </div>
    )
}

export default VideoPlayer