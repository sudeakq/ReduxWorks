import React from "react"
const Home = () => {
    const redirectFunc = () => {
        window.location = "/detail"
    }
    return (
        <div>
            <button onClick={redirectFunc}>Yönlendir</button>
        </div>
    )
}
export default Home