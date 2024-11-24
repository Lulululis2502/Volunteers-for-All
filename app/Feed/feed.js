import { TextInput, TouchableOpacity, Text, View, SafeAreaView, Pressable, Image} from "react-native";
import Style from "../../assets/StyleHPg";
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Routes from '../tabs/routes';

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
        
        <Pressable >
          <Link href=""> 
          <Image style={Style.user} source={require("../../assets/images/user.jpeg")}/>
          </Link>
        </Pressable>
        </View>
          
        <Routes/>
        
      

      </SafeAreaView>
              

    );
  }

  

  
