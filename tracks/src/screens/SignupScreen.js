import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(Context);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={"Sign Up for Tracker"}
        errorMessage={state.errorMessage}
        btnText={"Sign Up"}
        onSubmit={val => signup(val)}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account ? Sign in instead.
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => null
  };
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    flex: 1,
    justifyContent: "center"
  },
  errorMessage: {
    fontSize: 16,
    marginTop: 15,
    marginHorizontal: 10,
    color: "red"
  },
  link: {
    color: "blue"
  }
});

export default SignupScreen;
