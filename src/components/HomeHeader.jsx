import { IoChevronDown, IoNotifications, IoSearch } from "react-icons/io5"



function HomeHeader() {

    return (
        <nav className="flex items-center justify-between px-4" >
            <section className="flex items-center gap-x-4">
                <img className="w-40" src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456" alt="" />
                <div className="flex text-red-600 items-center">
                    Browse
                    <IoChevronDown />
                </div>
                <div>Kids</div>
            </section>
            <section className="flex item-center gap-x-4">
                <div className="border-white border-[2px] flex item-center w-fit p-1 gap-x-3">
                    <IoSearch className="text-2xl" />
                    <input type="text" placeholder="Title, Movie" className="bg-transparent outline-none w-[300px]" />
                </div>
                <IoNotifications className="text-3xl" />
                <div className="w-10 h-10 bg-blue-500">

                </div>
            </section>
        </nav>
    )
}

export default HomeHeader