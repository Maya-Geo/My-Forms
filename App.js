import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logContainer}>
        <Text style={styles.logText}>Login</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Your Email" style={styles.input} />

        <TextInput placeholder="Your Password" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.textSign}>
        Forgot password?<Text style={{ color: "#5F2585" }}>Click here</Text>
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#C795BF",
  },

  logContainer: {
    flex: 0.5,
    fontSize: 20,
    marginLeft: 30,
    justifyContent: "center",
  },

  logText: {
    textAlign: "center",
    marginBottom: 160,
    fontSize: 60,
    color: "#5F2585",
  },

  textPass: {
    marginLeft: 215,
    color: "#5F2585",
  },

  inputContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    padding: 30,
    borderRadius: 20,
    backgroundColor: "#9E1AC9",
    color: "#fff",
    fontSize: 15,
    height: 40,
    marginBottom: 50,
    width: 370,
  },

  button: {
    backgroundColor: "#5F2585",
    padding: 16,
    borderRadius: 20,
    justifyContent: "center",
    marginBottom: 10,
    marginLeft: 33,
    width: 310,
  },

  buttonText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  textSign: {
    marginLeft: 100,
    marginTop: 45,
  },
});
