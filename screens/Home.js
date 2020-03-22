import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as firebase from "firebase";

export default () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  componentDidMount = () => {
    const [email, name] = firebase.auth().currentUser;

    setEmail(email);
    setName(name);
  };

  signOutUser = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Olá {email}</Text>

      <TouchableOpacity
        style={{ marginTop: 32 }}
        onPress={signOutUser}
      ></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
