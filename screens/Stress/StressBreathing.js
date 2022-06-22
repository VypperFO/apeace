import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
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

  const [text, setText] = useState("1");

  const plus = (event) => setText((parseInt(text) + 1).toString());
  const minus = (event) => {
    if (parseInt(text) > 1) {
      setText((parseInt(text) - 1).toString());
    }
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.start}>
          <Text style={styles.h1}>Breathing Exercices</Text>

          <View style={styles.iterations}>
            <TouchableWithoutFeedback onPress={plus}>
              <Text style={styles.iterationsButton}>+</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.iterationsText}>{text}</Text>
            <TouchableWithoutFeedback onPress={minus}>
              <Text style={styles.iterationsButton}>-</Text>
            </TouchableWithoutFeedback>
          </View>

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
  iterations: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },
  iterationsText: {
    fontSize: 25,
  },
  iterationsButton: {
    width: 50,
    height: 50,
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
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

var num = parseInt(StressBreathing.text);
export var numIteration = num;
export default StressBreathing;
