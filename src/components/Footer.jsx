import CurrentDate from "./CurrentDate"

function Footer () {
    return (
        <>
        <footer className="container-fluid text-center mt-5">
            <h5>© Kairos Weather App - All rights reserved. Unauthorized reproduction, distribution, or modification of this weather application is strictly prohibited.</h5>
            <span className="text-primary"><CurrentDate/></span>
        </footer>

        </>
    )
}

export default Footer