import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="PgInit" 
      options={{headerShown: false}}/>

      <Stack.Screen 
      name="tabs/LogVolu" 
      options={{ title: "Voltar"}} 
    />
</Stack>
  );
}
