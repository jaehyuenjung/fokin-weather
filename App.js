import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "6c459cdbfaca1b372cfb9237d1f5cbb0";

export default class App extends React.Component {
    state = {
        isLoading: true,
    };

    getWeather = async (latitude, longitude) => {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
        console.log(data);
    };

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
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
