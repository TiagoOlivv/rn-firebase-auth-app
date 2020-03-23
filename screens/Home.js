import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as firebase from "firebase";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function loadData() {
      const user = await firebase.auth().currentUser;
      setName(user.displayName);
      setEmail(user.email);
    }
    loadData();
  });

  signOutUser = () => {
    firebase.auth().signOut();
  };

  return (
    <View style={styles.container}>
      <Text>Olá {name}</Text>

      <TouchableOpacity style={{ marginTop: 32 }} onPress={signOutUser}>
        <Text style={styles.logOut}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logOut: {
    color: "#e9446a",
    fontWeight: "500"
  }
});
