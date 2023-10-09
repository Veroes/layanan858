import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function TombolLayanan({ navigation }) {
  const [isLoaded] = useFonts({
    'Open-Sans-Reg': require('../assets/fonts/OpenSans-Regular.ttf'),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MainMenu")}>
        <Text style={styles.text}>Layanan *858#</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#4798FF',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontFamily: 'Open-Sans-Reg',
    fontSize: 15,
    color: 'white'
  }
});
