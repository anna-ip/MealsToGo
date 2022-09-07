import React from "react";

import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as firebase from "firebase";
import { ThemeProvider } from "styled-components/native";

import { Navigation } from "./src/infrastructure/navigation";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/sevices/authentication/authentication.contex";

const firebaseConfig = {
  apiKey: "AIzaSyDU6HUyVfuqCVEg5_wyf7lhuSuH8M-9O3k",
  authDomain: "meals-to-go-f7f9f.firebaseapp.com",
  projectId: "meals-to-go-f7f9f",
  storageBucket: "meals-to-go-f7f9f.appspot.com",
  messagingSenderId: "244164487346",
  appId: "1:244164487346:web:459b9d37275933c70481ab",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  //const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
