import React, {Component} from 'react';
import SplashScreen from "./src/components/SplashScreen";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <SplashScreen/>
        );
    }
}

export default App;
