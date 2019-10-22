import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, btnText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <Spacer />
      <Input
        label="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage !== "" && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <Spacer>
        <Button title={btnText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    marginTop: 15,
    marginHorizontal: 10,
    color: "red"
  }
});

export default AuthForm;
