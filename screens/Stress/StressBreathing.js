import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

const StressBreathing = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.start}>
          <Text style={styles.h1}>Breathing Exercices</Text>
          <TouchableOpacity
            style={styles.startButton}
            activeOpacity={0.65}
            onPress={() => navigation.navigate("StressAnimation")}
          >
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#60c85b",
    flex: 1,
  },
  start: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  h1: {
    color: "white",
    fontFamily: "OpenSans_700Bold",
    fontSize: 50,
    textAlign: "center",
  },
  startButton: {
    height: "7%",
    width: "60%",
    marginBottom: "5%",
    backgroundColor: "#fe9cd3",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  startButtonText: {
    color: "white",
    fontFamily: "OpenSans_500Medium",
    fontSize: 35,
    textAlign: "center",
  },
});

export default StressBreathing;
