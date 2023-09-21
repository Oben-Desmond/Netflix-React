import { useEffect, useState } from "react"
import HomeHeader from "../components/HomeHeader"
import { Link } from "react-router-dom"
import axios from "axios"
import HeroSection from "../components/HeroSection"



function Home() {


    const [netflixOriginals, setNetflixOriginals] = useState([])
    const [trending, setTrending] = useState([])


    //when component mounts

    useEffect(() => {

        console.log('loading...')
        axios.get("https://netflix-backend-blob.onrender.com/movies").then((response) => {

            setNetflixOriginals(response.data.data)

        }).catch(err => {
            console.log(err)
        })

    }, [])


    useEffect(() => {

        console.log('loading...')
        axios.get("https://netflix-backend-blob.onrender.com/movies/trending").then((response) => {

            setTrending(response.data.data)

        }).catch(err => {
            console.log(err)
        })

    }, [])


    return (
        <div className="min-h-screen bg-black">
            <HomeHeader />
            <HeroSection />
            <section className="pl-8 mb-8">
                <h2 className="mb-2 font-medium">Netflix Originals</h2>
                <div className="overflow-scroll">
                    <div className="w-[300vw]  lg:w-[150vw] grid grid-cols-7 gap-x-4 h-[200px] ">
                        {
                            netflixOriginals.map((item, index) => {
                                return (
                                    <Link to="/movie-detail" className=" h-full " state={item} >
                                        <img className="h-full object-cover" src={item.posterURL} alt="" />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className="pl-8 mb-8 ">
                <h2 className="mb-2 font-medium">Trending</h2>
                <div className="overflow-scroll">
                    <div className="w-[300vw]  lg:w-[150vw]  flex gap-x-4 ">
                        {
                            trending.map((item, index) => {
                                return (
                                    <Link to="/movie-detail" state={item} >
                                        <img className="h-40 object-cover" src={item.posterURL} alt="" />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <div className="h-32"></div>


        </div>
    )
}

export default Home