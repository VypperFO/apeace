import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
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
import Line from "../components/Line";

const Home = ({ navigation }) => {
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
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Text style={styles.h1}>What's happening?</Text>
            <Text style={styles.h2}>Relieve you emotions...</Text>
          </View>

          <View style={styles.actions}>
            <Line />
            <Text style={styles.exercises}>Exercises</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Stress")}
              activeOpacity={0.65}
            >
              <Image
                style={styles.buttonImage}
                source={{
                  uri: "https://www.shareicon.net/data/512x512/2016/06/15/781277_people_512x512.png",
                }}
              />
              <Text style={styles.buttonText}>Stress</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Mad")}
              activeOpacity={0.65}
            >
              <Image
                style={styles.buttonImage}
                source={{
                  uri: "https://www.shareicon.net/data/512x512/2016/11/03/849520_emoticons_512x512.png",
                }}
              />
              <Text style={styles.buttonText}>Mad</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("BPD")}
              activeOpacity={0.65}
            >
              <Image
                style={styles.buttonImage}
                source={{
                  uri: "https://www.shareicon.net/data/512x512/2016/11/03/849527_emoticons_512x512.png",
                }}
              />
              <Text style={styles.buttonText}>BPD</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Panic")}
              activeOpacity={0.65}
            >
              <Image
                style={styles.buttonImage}
                source={{
                  uri: "https://www.shareicon.net/data/512x512/2016/11/03/849518_surprised_512x512.png",
                }}
              />
              <Text style={styles.buttonText}>Panic</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60c85b",
  },
  header: {
    flex: 0.2,
    textAlign: "center",
    backgroundColor: "#60c85b",
  },
  h1: {
    padding: "5%",
    paddingTop: "15%",
    paddingBottom: 0,
    fontFamily: "OpenSans_700Bold",
    fontSize: 45,
    color: "white",
  },
  h2: {
    padding: "5%",
    marginBottom: "5%",
    fontFamily: "OpenSans_700Bold",
    fontSize: 25,
    color: "white",
  },
  exercises: {
    margin: "10%",
    marginLeft: "5%",
    fontFamily: "OpenSans_700Bold",
    fontSize: 30,
  },
  actions: {
    flex: 0.8,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "space-evenly",
  },
  button: {
    height: 300,
    width: "80%",
    marginBottom: "10%",
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
  buttonImage: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
});

export default Home;
