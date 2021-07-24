import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "",
        gradient: [],
    },
    Drizzle: {
        iconName: "",
        gradient: [],
    },
    Rain: {
        iconName: "",
        gradient: [],
    },
    Snow: {
        iconName: "",
        gradient: [],
    },
    Atmosphere: {
        iconName: "",
        gradient: [],
    },
    Clear: {
        iconName: "",
        gradient: [],
    },
    Clouds: {
        iconName: "",
        gradient: [],
    },
    Mist: {
        iconName: "",
        gradient: [],
    },
    Smoke: {
        iconName: "",
        gradient: [],
    },
    Haze: {
        iconName: "",
        gradient: [],
    },
    Dust: {
        iconName: "",
        gradient: [],
    },
    Fog: {
        iconName: "",
        gradient: [],
    },
    Sand: {
        iconName: "",
        gradient: [],
    },
    Dust: {
        iconName: "",
        gradient: [],
    },
    Ash: {
        iconName: "",
        gradient: [],
    },
    Squall: {
        iconName: "",
        gradient: [],
    },
    Tornado: {
        iconName: "",
        gradient: [],
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={96}
                    color="white"
                />
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.halfContainer}></View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado",
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
