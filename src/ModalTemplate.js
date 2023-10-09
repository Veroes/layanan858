import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ModalTemplate({
	modalVisible,
  headerText,
  infoText,
  content,
  InputHandler,
}) {
  return (
    <Modal
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.descriptionView}>
            <Text style={{ fontSize: 25, color: '#A3CBFF' }}>{headerText}</Text>
            {infoText}
          </View>
          <View style={styles.optionsView}>{content}</View>
          {InputHandler}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 11,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});