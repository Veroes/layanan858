import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TombolLayanan from './src/TombolLayanan';
import MainMenu from './src/MainMenu';
import NomorTujuan from './src/NomorTujuan';
import TransferPulsa from './src/TransferPulsa';
import Persetujuan from './src/Persetujuan';
import SuccessScreen from './src/SuccessScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TombolLayanan"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen 
          name="TombolLayanan"
          component={TombolLayanan}
        />
        <Stack.Screen 
          name="MainMenu"
          component={MainMenu}
        />
        <Stack.Screen 
          name="NomorTujuan"
          component={NomorTujuan}
        />
        <Stack.Screen
          name="TransferPulsa"
          component={TransferPulsa} 
        />
        <Stack.Screen 
          name="Persetujuan"
          component={Persetujuan}
        />
        <Stack.Screen 
          name="SuccessScreen"
          component={SuccessScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}