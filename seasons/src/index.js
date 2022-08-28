import React from "react";
import ReactDOM from "react-dom/client";


class App extends React.Component {
    // Javascript and not specific to react at all
    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState!!
                this.setState({ lat: position.coords.latitude })

                // we did not!!
                // this.state.lat = position.coords.latitude
            },
            err => console.log(err)
        );
    }

    // React says we have to define render!!
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);