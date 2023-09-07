import HomeHeader from "../components/HomeHeader"
import { netflixMovies, trendingMovies } from "../data/movies"
import { Link } from "react-router-dom"


function Home() {

    return (
        <div>
            <HomeHeader />

            <section className="pl-8 mb-8">
                <h2 className="mb-2 font-medium">Netflix Originals</h2>
                <div className="overflow-scroll">
                    <div className="w-[150vw] flex gap-x-4 ">
                        {
                            netflixMovies.map((movie, index) => {
                                return (
                                    <Link to="/movie-detail" >
                                        <img className="h-40" src={movie} alt="" />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="pl-8 mb-8">
                <h2 className="mb-2 font-medium">Trending Now</h2>
                <div className="flex gap-x-4 overflow-scroll">
                    {
                        trendingMovies.map((movie, index) => {
                            return (
                                <img className="h-40" src={movie} alt="" />
                            )
                        })
                    }
                </div>
            </section>

            <section className="pl-8 mb-8">
                <h2 className="mb-2 font-medium">Netflix Originals</h2>
                <div className="flex gap-x-4 overflow-scroll">
                    {
                        netflixMovies.reverse().map((movie, index) => {
                            return (
                                <img className="h-40" src={movie} alt="" />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Home