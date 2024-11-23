import { TextInput, TouchableOpacity, Text, View, SafeAreaView, Pressable, ImageBackground } from "react-native";
import Style from "../../assets/StyleHPg";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Ident() {

  const navigation = useNavigation();

    return (
      <SafeAreaView style={Style.containerini}>

        <View style={Style.topo} >
          <TouchableOpacity 
            style={Style.roundButton} 
            onPress={() => navigation.openDrawer()}
      >
        <Icon name="menu" size={30} color="#000000" />         </TouchableOpacity>
        <Pressable  style={Style.btnpesqui}>
        <Link href="/tabs/Init"> 
        <Icon
       
        name="search" size={24} color="#007BFF" />
        </Link>
        </Pressable>

        <TextInput
          style={Style.pesquisabtn}
          placeholder='Pesquisar'
          
        />
        
        <Pressable style={Style.user} >
          <Link href="/tabs/Init"> 
            <Entypo name="user" size={40} color="#ffffff"/>
          </Link>
        </Pressable>
        </View>
        
      </SafeAreaView>
              

    );
  }

  

  
