import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class App extends React.Component {
    state = {
        isLoading: true,
    };

    getLocation = async () => {
        try {
            const response = await Location.requestForegroundPermissionsAsync();
            console.log(response);
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.setState({ isLoading: false });
        } catch (error) {
            Alert.alert("Can't find you.", "So sad");
        }
    };

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading } = this.state;
        return isLoading ? <Loading /> : null;
    }
}
