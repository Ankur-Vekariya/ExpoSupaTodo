import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Pressable
        onPress={() => {
          router.push("/login");
        }}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default Index;
