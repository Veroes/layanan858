import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import ModalTemplate from "./ModalTemplate";
import { useState } from "react";

export default function TransferPulsa({ navigation, route }) {
	const [isModalVisible, setIsModalVisible] = useState(true);
	const [textInputValue, setTextInputValue] = useState("");

	const { phoneNumber } = route.params;

	const toggleModal = () => {
		setIsModalVisible(!isModalVisible);
	}
	
	const handleSend = () => {
		toggleModal();
		setTimeout(() => {
			navigation.navigate("Persetujuan", {phoneNumber: phoneNumber, pulsaTotal: textInputValue})
		}, 300)
	}
	return (
		<ModalTemplate 
			content={<Text>Silahkan masukkan jumlah pulsa yang akan ditransfer : (min 5000, max 1jt & tanpa . (titik) atau , (koma))</Text>}
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