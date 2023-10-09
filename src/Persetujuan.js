import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import ModalTemplate from "./ModalTemplate";
import { useState } from "react";

export default function Persetujuan({ navigation, route }) {
	const [textInputValue, setTextInputValue] = useState("");

	const { phoneNumber, pulsaTotal } = route.params;


	const handleSend = () => {
		if (textInputValue == 1) {
			setTimeout(() => {
				navigation.navigate("SuccessScreen");
			}, 300)
		} else {
			Alert.alert("Gabisa", [{text: "Saya Paham"}])
		}
	}

  return (
		<ModalTemplate
			infoText={<Text>Hati2 penipuan. Anda akan Transfer Pulsa {pulsaTotal} ke nomor {phoneNumber} (Biaya 1850 & 1 poin undian TP iPhone14)</Text>}
			content={
				<>
					<Text>1. Ya</Text>
					<Text>9. Back</Text>
					<Text>0. Home</Text>
				</>
			}
			InputHandler=
			{
				<View>
          <TextInput
              style={styles.inputStyle}
							value={textInputValue}
							onChangeText={setTextInputValue}
            />
          <View style={styles.lowerButton}>
            <TouchableOpacity onPress={() => navigation.navigate("TombolLayanan")}>
              <Text style={{ fontSize: 15, color: 'blue' }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSend}>
              <Text style={{ fontSize: 15, color: 'blue' }}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
			}
		/>
	)
}

const styles = StyleSheet.create({
  lowerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor : 'blue',
    marginHorizontal: 25,
    marginTop: 10
  },
  inputStyle: {
		marginVertical: 15,
    borderBottomColor: 'blue',
    borderBottomWidth: 1
	}
})