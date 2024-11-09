import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
      options={{headerShown: false}}/>

      <Stack.Screen 
      name="tabslogvolu/CadVolu" 
      options={{headerShown: false }} 
    />
     <Stack.Screen 
      name="tabslogvolu/LogVolu" 
      options={{ title: "Voltar"}} 
    />
<Stack.Screen 
      name="tabsInit" 
      options={{ title: "Voltar"}} 
    />

     <Stack.Screen name="tabs" options={{ headerShown: false }} />

     <Stack.Screen name="tabslogong/LogOng" options={{title:"voltar"}}/>

     <Stack.Screen name="tabslogong/CadOng" options={{ headerShown: false}}/>
</Stack>


  );
}
