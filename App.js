import React from "react";
import { SafeAreaView, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Navigation from "./app/components/Navigation";

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView style={{
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100%",
    }}>
      <Navigation />
    </SafeAreaView>
  );
};
export default App;
