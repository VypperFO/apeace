import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Construction() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 50,
          textAlign: "center",
          marginTop: "20%",
          color: "white",
        }}
      >
        Page under construction...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60c85b",
  },
});
