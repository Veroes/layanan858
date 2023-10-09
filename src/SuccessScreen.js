import { Alert, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useCallback } from "react";
import ModalTemplate from "./ModalTemplate";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function SuccessScreen({ navigation }) {
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

	const handleSend = () => {
		setTimeout(() => {
			navigation.navigate("TombolLayanan")
		}, 300)
	}
	
	return (
		<ModalTemplate 
			headerText={<Text>Success!</Text>}
			infoText={<Text>Thank you for using this service 👋😀</Text>}
			InputHandler=
			{
				<View>
          <View style={styles.lowerButton}>
            <TouchableOpacity onPress={handleSend} style={styles.exitButton} onLayout={handleOnLayout}>
              <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Open-Sans-Reg', fontSize: 20 }}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
			}
		/>
	)
}

const styles = StyleSheet.create({
  lowerButton: {
		alignItems : "center",
    marginHorizontal: 70,
		backgroundColor: '#4798FF',
    marginTop: 10,
		borderRadius: 10,
  },
	exitButton: {
		padding: 15,
	
	}
})