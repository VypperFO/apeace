import React from "react";
import { View } from "react-native";

export default function Line() {
  return (
    <View
      style={{
        borderBottomColor: "gray",
        borderBottomWidth: 5,
        borderRadius: 10,
        marginTop: 10,
        justifySelf: "center",
        alignSelf: "center",
        width: "15%",
      }}
    />
  );
}
