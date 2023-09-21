import { useEffect, useState } from "react"
import { IoChevronDown, IoNotifications, IoSearch } from "react-icons/io5"
import { Link } from "react-router-dom"



function HomeHeader() {

    const [user, setUser] = useState(undefined)

    useEffect(() => {

        const userString = localStorage.getItem("user")
        if (userString) {
            const u = JSON.parse(userString)
            setUser(u)
        }

    }, [])



    return (
        <nav className="flex items-center justify-between px-4" >
            <section className="flex items-center gap-x-4">
                <img className="w-40" src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt="" />
                <div className=" hidden md:flex text-red-600 items-center">
                    Browse
                    <IoChevronDown />
                </div>
                <div className="hidden md:block">Kids</div>
            </section>
            <section className="flex item-center gap-x-4">
                <Link to="/search">
                    <div className="border-transparent md:border-white border-[2px] flex item-center w-fit  p-1 gap-x-3">
                        <IoSearch className="text-2xl" />
                        <input type="text" placeholder="Title, Movie" className="bg-transparent outline-none hidden md:block" />
                    </div>
                </Link>
                <IoNotifications className="text-3xl" />
                <div className="w-10 h-10 bg-blue-500 text-center">
                    <div className="mt-2">{user?.username[0]}</div>
                </div>
            </section>
        </nav>
    )
}

export default HomeHeader