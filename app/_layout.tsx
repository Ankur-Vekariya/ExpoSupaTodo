import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { paddingHorizontal: 15, backgroundColor: "white" },
        headerShown: false,
      }}
    />
  );
}
