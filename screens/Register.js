import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import * as firebase from "firebase";

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setError] = useState(null);

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: name
        });
      })
      .catch(error => setError(error.message));
  };

  return (
    <View style={styles.container}>
      <Text
        style={styles.greeting}
      >{`Insira seus dados\npara efetuar o cadastro.`}</Text>

      <View style={styles.errorMessage}>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>

      <View style={styles.form}>
        <View>
          <Text style={styles.inputTitle}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={name => setName(name)}
            value={name}
          ></TextInput>
        </View>

        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            onChangeText={email => setEmail(email)}
            value={email}
          ></TextInput>
        </View>

        <View style={{ marginTop: 32 }}>
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            autoCapitalize="none"
            onChangeText={password => setPassword(password)}
            value={password}
          ></TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.singIn}>Cadastrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center", marginTop: 32 }}>
        <Text styles={{ color: "#414959", fontSize: 13 }}>
          Já tem cadastro?{` `}
          <Text style={styles.singUp}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center"
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30
  },
  error: {
    color: "#e9446a",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center"
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: "#8a8f9e",
    fontSize: 10,
    textTransform: "uppercase"
  },
  input: {
    borderBottomColor: "#8a8f9e",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161f3d"
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#e9446a",
    borderRadius: 4,
    height: 52,
    alignItems: "center",
    justifyContent: "center"
  },
  singIn: {
    color: "#fff",
    fontWeight: "500"
  },
  singUp: {
    color: "#e9446a",
    fontWeight: "500"
  }
});
