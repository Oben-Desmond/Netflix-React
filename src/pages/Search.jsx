import { IoArrowForward, IoChevronDown, IoNotifications, IoSearch } from "react-icons/io5"
import SkeletonText from "../components/SkeletonText"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Search() {
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState("")
    const [moviesResult, setMoviesResult] = useState([])

    function handleChange(e) {
        setText(e.target.value)
    }

    function searchText() {
        setLoading(true)
        axios.get(`https://netflix-backend-blob.onrender.com/movies/search?query=${text}`)
            .then((response) => {
                setLoading(false)
                setMoviesResult(response.data.data)

            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <nav className="flex items-center justify-between px-4" >
                <section className="flex items-center gap-x-4">
                    <img className="w-40" src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt="" />
                    <div className=" hidden md:flex text-red-600 items-center">
                        Search
                    </div>
                </section>
                <section className="flex item-center gap-x-4">
                    <div className="border-transparent md:border-white border-[2px] flex item-center w-fit  p-1 gap-x-3">
                        <IoSearch className="text-2xl" />
                        <input onChange={handleChange} type="text" placeholder="Title, Movie" className="bg-transparent outline-none w-[40vw]" />
                        <button onClick={searchText} className="bg-red-600 p-2">
                            <IoArrowForward />
                        </button>
                    </div>
                    <IoNotifications className="text-3xl" />
                </section>
            </nav>

            <main className="p-4">
                <h3>Search Results</h3>
                <section className="results">
                    {loading && <SkeletonText />}
                    {
                        moviesResult.map((item, index) => {
                            return (
                                <Link to="/movie-detail" state={item} replace={true}>
                                    <div className="flex mb-4 border-b-2 border-[#1c1c1c]">
                                        <img src={item.posterURL} className="w-[200px]" alt="" />
                                        <div className="p-3">
                                            <h2>{item.title}</h2>
                                            <div>{item.category}</div>
                                            <div>{item.year}</div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </section>
            </main>
        </div>
    )
}

export default Search