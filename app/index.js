import { Image, Text, View, Pressable, ImageBackground } from "react-native";
import { Link } from "expo-router";
import Style from "../assets/StyleHPg";



export default function Ident() {


  return (
    <View
      style={Style.container}
    >
      <ImageBackground
          style={Style.circulo}
          source={require('../assets/images/circulos.jpeg')}/>

      <Pressable style={Style.botaoINSTI}>
       <Link href="/tabslogong/LogOng">
        <Text style={ Style.text}>
            Sou uma Instituição
        </Text>
       </Link>
      </Pressable>

      <Pressable style={Style.botaoVOLUN}>
       <Link href="/tabslogvolu/LogVolu">
        <Text style={ Style.text}>
            Sou um Voluntário
        </Text>
       </Link>
      </Pressable>

      <Image
          style={Style.logo}
          source={require('../assets/images/logo-fake.jpeg')} />
    </View>
  );
}
