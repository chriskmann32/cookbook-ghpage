import useReadCSV from "../csv/useReadCSV"

function Homepage() {
    useReadCSV();

    return(
        <div style={{textAlign: 'center'}}>
            <h1>Welcome to the Cookbook!</h1>
        </div>
    )
}

export default Homepage