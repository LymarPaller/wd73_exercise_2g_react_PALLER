function WeatherCard (props) {
    const {day, status, temp, windspeed} = props;

    let isRaining;
    let bringUmbrella;

    if (status.includes('Rain')) {
        isRaining = 'bg-info';
        bringUmbrella = 'Bring Umbrella';
    }
    else {
        isRaining = 'bg-success';
        bringUmbrella = '';
    }


    return (
        <>
        <div className="col-3 m-2">
            <div className={`card ${isRaining} text-center`}>
                <div className="card-body">
                    <h5 className="card-title">Day:<span className="fw-bold mx-2">{day}</span></h5>
                    <p className="card-text">Weather:<span>{status}</span></p>
                    <p className="card-text">Temperature:<span>{temp}</span></p>
                    <p className="card-text">Windspeed:<span>{windspeed}</span></p>
                    <h5>{bringUmbrella}</h5>

                </div>
            </div>
        </div>
        </>
    )
}

export default WeatherCard