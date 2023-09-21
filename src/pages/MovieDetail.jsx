import { IoAdd, IoPlay, IoThumbsDownOutline, IoThumbsUpOutline } from "react-icons/io5"
import { HiOutlineSpeakerXMark } from "react-icons/hi2"
import "./Pages.css"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

function MovieDetail() {
    const location = useLocation()
    const [movie, setMovie] = useState(undefined)

    useEffect(() => {
        setMovie(location.state)
    }, [])


    return (
        <div>
            <section className=" h-[70vh] movie-detail-hero " style={{ backgroundImage: `url(${movie?.posterURL})`, backgroundSize: "cover" }}>
                <div className="h-full bg-black bg-opacity-50  relative ">
                    <section className="bottom-10 absolute px-10 w-1/2 space-y-3">
                        <div className="text-3xl">{movie?.title}</div>
                        <div className="relative py-3">
                            <div className="h-1 absolute  bg-gray-200 w-full"></div>
                            <div className="h-1 absolute bg-red-600 w-1/2"></div>
                        </div>
                        <div className="flex gap-x-2">
                            <Link to="/video" state={movie}>
                                <button className="bg-white text-black flex mr-2  px-5 gap-2 items-center p-2 justify-around text-xl rounded-md">
                                    <IoPlay className="text-2xl" />
                                    <label>Resume</label>
                                </button>
                            </Link>
                            <button className="p-3 text-2xl rounded-full bg-gray-500 border-gray-200 text-white border">
                                <IoAdd />
                            </button>
                            <button className="p-3 text-2xl rounded-full bg-gray-500 border-gray-200 text-white border">
                                <IoThumbsUpOutline />
                            </button>
                            <button className="p-3 text-2xl rounded-full bg-gray-500 border-gray-200 text-white border">
                                <IoThumbsDownOutline />
                            </button>
                        </div>
                    </section>
                    <button className="p-3 absolute bottom-10 right-10 text-2xl rounded-full bg-gray-500 border-gray-200 text-white border">
                        <HiOutlineSpeakerXMark />
                    </button>
                </div>
            </section>
            <section className="mt-5 p-20 px-10">
                <span className="p-1 border rounded mr-3">{movie?.category}</span>
                <span className="p-1 border rounded ">{movie?.year}</span>
                <p className="w-1/2 mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla vitae deserunt culpa veritatis aut sit amet aliquam nemo obcaecati quia inventore accusamus pariatur qui aperiam, ipsam reprehenderit quos fugit.
                </p>
            </section>
        </div>
    )
}

export default MovieDetail