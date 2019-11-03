import React, {Component} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';

class SplashScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            runningInBackground: false,
        };
    }
    componentDidMount(): void {
    }

    componentDidUpdate(prevProps, prevState, snapshot): void {
    }

    componentWillUnmount(): void {
    }

    render(): React.ReactElement<any> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <View style={Style.container}>
                <ActivityIndicator size="large" color="#0000ff"/>
                <Text>Loading...</Text>
            </View>
        );
    }
}

const Style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "#c7ecee",
        },
    }
);

export default SplashScreen;