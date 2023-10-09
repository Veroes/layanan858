import { Alert, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import ModalTemplate from "./ModalTemplate";
import { useState } from "react";

export default function MainMenu({ navigation }) {
  const [textInputValue, setTextInputValue] = useState("");

  const handleSend = () => {
    if (textInputValue == 1) {
      setTimeout(() => {
				navigation.navigate("NomorTujuan");
			}, 300)
    } else if (textInputValue == "") {
      Alert.alert("Unexpected", "You must enter one of the options", [
        {text: "Saya Paham"}
      ])
    } else {
			Alert.alert("Unexpected", "Only the first option is available", [
				{text: "Saya Paham"}
			])
		}
  }

  return (
    <ModalTemplate
      infoText={<Text>Mau Samsung Fold 4 dr aldi taher? Hub di *500*352#</Text>} 
      headerText={"Phone"}  
      content=
      {
        <>
        <Text>1. Transfer Pulsa</Text>
        <Text>2. Minta Pulsa</Text>
        <Text>3. Auto TP</Text>
        <Text>4. Delete Auto TP</Text>
        <Text>5. List Auto TP</Text>
        <Text>6. Cek Kupon Undian TP</Text>
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
  );
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