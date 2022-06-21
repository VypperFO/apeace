import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
} from "@expo-google-fonts/open-sans";

const Stress = ({ navigation }) => {
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
        <View style={styles.header}>
          <Text style={styles.h1}>Stress</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("StressBreathing")}
            activeOpacity={0.65}
          >
            <Text style={styles.buttonText}>Breathing</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Construction")}
            activeOpacity={0.65}
          >
            <Text style={styles.buttonText}>Self Reflect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.25,
    justifyContent: "center",
    backgroundColor: "#60c85b",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  h1: {
    paddingLeft: "5%",
    fontFamily: "OpenSans_700Bold",
    fontSize: 45,
    color: "white",
  },
  actions: {
    flex: 0.75,
    justifyContent: "space-evenly",
  },
  button: {
    height: "20%",
    width: "80%",
    marginBottom: "5%",
    backgroundColor: "#fe9cd3",
    borderRadius: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    fontFamily: "OpenSans_500Medium",
    textAlign: "center",
    fontSize: 35,
  },
});

export default Stress;
