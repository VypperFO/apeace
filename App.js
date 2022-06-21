import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Stress from "./screens/Stress/Stress";
import StressBreathing from "./screens/Stress/StressBreathing";
import StressAnimation from "./screens/Stress/StressAnimation";
import Mad from "./screens/Mad/Mad";
import BPD from "./screens/BPD/BPD";
import Panic from "./screens/Panic/Panic";
import Construction from "./screens/Construction";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Construction" component={Construction} />

        {/* Stress Section*/}
        <Stack.Group>
          <Stack.Screen name="Stress" component={Stress} />
          <Stack.Screen name="StressBreathing" component={StressBreathing} />
          <Stack.Screen name="StressAnimation" component={StressAnimation} />
        </Stack.Group>

        {/* Mad Section*/}
        <Stack.Group>
          <Stack.Screen name="Mad" component={Mad} />
        </Stack.Group>

        {/* BPD Section*/}
        <Stack.Group>
          <Stack.Screen name="BPD" component={BPD} />
        </Stack.Group>

        {/* Panic Section*/}
        <Stack.Group>
          <Stack.Screen name="Panic" component={Panic} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
