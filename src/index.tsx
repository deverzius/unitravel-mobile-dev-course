import React from "react";
import * as Localization from "expo-localization";
import { i18n, Language } from "@/Localization";
import { NativeBaseProvider } from "native-base";
import { store, persistor } from "@/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApplicationNavigator } from "./Navigation";
import { useFonts } from 'expo-font';
import { Toast } from "react-native-toast-message/lib/src/Toast";

let montFonts = {
  montBlack: require('../assets/fonts/Montserrat-Black.ttf'),
  montBold: require('../assets/fonts/Montserrat-Bold.ttf'),
  montExtraBold: require('../assets/fonts/Montserrat-ExtraBold.ttf'),
  montExtraLight: require('../assets/fonts/Montserrat-ExtraLight.ttf'),
  montLight: require('../assets/fonts/Montserrat-Light.ttf'),
  montMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
  montRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
  montSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  montThin: require('../assets/fonts/Montserrat-Thin.ttf'),
};

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = Language.ENGLISH;

export default function App() {
  const [isLoaded] = useFonts(montFonts);

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
          <Toast />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
}
