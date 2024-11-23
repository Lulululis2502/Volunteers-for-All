import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";


export default function Root() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#f4f4f4',
          width: 250,
          height: '100%',
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
        options={{
          title: 'Home', 
          drawerIcon: () => <Ionicons name="home" size={24} color="#4caf50" />,
        }}
      />
      <Drawer.Screen
        name="Configurações"
        options={{
          title: 'Configurações', 
          drawerIcon: () => <Ionicons name="settings" size={24} color="#4caf50" />, // Ícone de configurações
          drawerItemStyle: {
          
          },
        }}
      />
    </Drawer>
  );
}
