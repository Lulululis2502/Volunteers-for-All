import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router";

export default function Root() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,  // Isso deve remover o cabeçalho para todas as telas dentro do Drawer
        drawerStyle: {
          backgroundColor: '#f4f4f4',
          width: 250,
        },
        drawerContentStyle: {
          paddingVertical: 10,
        },
        drawerLabelStyle: {
          fontSize: 18,
          color: '#333',
        },
        drawerActiveBackgroundColor: '#4caf50',
        drawerActiveTintColor: '#ffffff',
        drawerInactiveTintColor: '#555',
      }}
    >
      <Drawer.Screen
        name="feed"
        options={{ title: 'dsa' }} />
      <Drawer.Screen
        name="Configurações"
        options={{ title: 'Configurações' }} />
    </Drawer>
  );
}
