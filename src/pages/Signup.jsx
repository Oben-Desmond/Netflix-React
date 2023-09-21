import { useState } from "react"
import { useNavigate, useNavigation } from "react-router-dom"


function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {

        e.preventDefault()

        const user = {
            "email": email,
            "password": password,
            "username": username
        }

        const userString = JSON.stringify(user);
        localStorage.setItem("user", userString)

        navigate("/")

    }

    return (
        <div>
            <div className="p-3">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-xl mb-3">Login To Netflix</h2>
                    <input required onChange={handleUsername} type="text" className="p-2 w-1/2 block bg-transparent mb-3 rounded-md outline-red-500 bg-gray-800" placeholder="User Name" />
                    <input required onChange={handleEmail} type="email" className="p-2 w-1/2 block bg-transparent mb-3 rounded-md outline-red-500 bg-gray-800" placeholder="Email" />
                    <input required onChange={handlePassword} type="password" className="p-2 w-1/2 block bg-transparent mb-3 rounded-md outline-red-500 bg-gray-800" placeholder="Password" />
                    <button type="submit" className="p-2 w-1/2 bg-red-600 ">Sign in</button>
                </form>

            </div>
        </div>
    )
}

export default Signup