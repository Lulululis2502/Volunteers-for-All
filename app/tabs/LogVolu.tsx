import { TextInput, Image, Text, View, SafeAreaView, Pressable, ImageBackground } from "react-native";
import Style from "../../assets/StyleHPg";
import React, { useState } from 'react';

export default function Ident() {
  const [email, setEmail] = useState(''); // Mover para dentro do componente Ident
  const [senha, setSenha] = useState(''); // Mover para dentro do componente Ident

  return (
    <View style={Style.container}>
      <ImageBackground
        style={Style.circulos}
        source={require('../../assets/images/circulos.jpeg')}
      />

      <Image
        style={Style.logo}
        source={require('../../assets/images/logo-fake.jpeg')}
      />

      <View style={Style.containerlog}>
        <Text style={Style.text1}>E-mail</Text>

        <TextInput
          style={Style.email}
          value={email}
          onChangeText={setEmail} // Atualiza o estado com o texto digitado
          placeholder="seuemail@exemplo.com"
        />

        <Text style={Style.text1}>Senha</Text>

        <TextInput
          style={Style.senha}
          value={senha}
          onChangeText={setSenha} // Atualiza o estado com o texto digitado
          placeholder="Insira a sua senha"
          secureTextEntry={true} //adiciona omissão no que foi digitado
        />

      </View>
    </View>
  );
}
