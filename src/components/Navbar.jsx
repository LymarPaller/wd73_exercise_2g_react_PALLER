import CurrentDate from "./CurrentDate"

function Navbar() {
    return (
        <>
        <nav className="text-center container-fluid">
            <h1 className="mt-5">Weather Forecast</h1>
            <span className="text-primary"><CurrentDate/></span>
        </nav>
        </>
    )
}

export default Navbar;