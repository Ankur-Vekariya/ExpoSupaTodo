import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaProvider
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <SafeAreaView>
        <View style={styles.card}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "700", color: "#122b3f" }}>
              Login
            </Text>
            <Text style={{ color: "#122b3f" }}>
              Enter details to see your task's
            </Text>
          </View>

          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setUserDetail({ ...userDetail, email: text });
            }}
            value={userDetail.email}
            placeholder="Email"
            placeholderTextColor={"#122b3f"}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              setUserDetail({ ...userDetail, password: text });
            }}
            value={userDetail.password}
            placeholder="Password"
            placeholderTextColor={"#122b3f"}
          />
          <Pressable
            style={styles.loginBtn}
            onPress={() => {
              console.log("btn pressed");
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Login</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Login;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    gap: 10,
    padding: 10,
    width: "100%",
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#122b3f",
    backgroundColor: "white",
    padding: 10,
  },
  loginBtn: {
    height: 50,
    borderRadius: 20,
    backgroundColor: "#122b3f",
    justifyContent: "center",
  },
});
