import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import Entypo from 'react-native-vector-icons/Entypo';
import Style from "../../assets/StyleHPg";
import { View, Pressable, Image, Text} from "react-native";
import { Link} from "expo-router";


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
          fontSize: 14,
          color: '#333',
          fontWeight:'bold'
        },
        //drawerActiveBackgroundColor: '#4caf50',
        drawerActiveTintColor: 'black',
        //drawerInactiveTintColor: '',
      }}
    >
      <Drawer.Screen
        name="feed"
        options={{
          title: '', 

          drawerIcon: () => <Entypo name="arrow-left" size={30} color="" />,
          
          drawerItemStyle: { 
          height:50,
          width:50,
          marginLeft:200,
         },
        }}
      />
              
<Drawer.Screen
        name="vagas"
        options={{
          title: 'Publicar minhas vagas', 
          drawerIcon: () => <Entypo name="briefcase" size={24} color="" />,

          drawerItemStyle: { 
          height:50,
          borderTopWidth: 3, // Adicionando a borda
          borderTopColor: '#D3D3D3', // Cor cinza clara
          },
          drawerLabelStyle: {
            fontSize: 12, 
            marginLeft: -25, 
            width:280,
          },
        }}
      />
     
      <Drawer.Screen
        name="Configuracoes"
        options={{
          title: 'Configurações', 
          drawerIcon: () => <Ionicons name="settings" size={24} color="" />, // Ícone de configurações
          drawerItemStyle: {
            marginTop: '195%',
            height:36,
          },
        }}
      />
    </Drawer>
  );
}
