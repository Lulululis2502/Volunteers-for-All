import { TextInput, Image, Text, View, SafeAreaView, Pressable, ImageBackground } from "react-native";
import Style from "../../assets/StyleHPg";
import React, { useState } from 'react';
import { Link } from "expo-router";
import {maskBr, validate} from "js-brasil";
import { useState } from "react";

export default function Ident() {
  const [email, setEmail] = useState(''); // Mover para dentro do componente Ident
  const [senha, setSenha] = useState(''); // Mover para dentro do componente Ident
  const[CPF, setCPF] = useState("");

const handleInputChange = (text) => {
  const formatted = text.length <= 11 ? maskBr.CPF(text) : maskBr.CPF(text);
  setCPF(formatted);
};

  return (
    <View style={Style.container}>
      <ImageBackground
        style={Style.circulo}
        source={require('../../assets/images/circulos.jpeg')}
      />

      <Image
        style={Style.logo}
        source={require('../../assets/images/logo-fake.jpeg')}
      />

      <View style={Style.containerlog}>
        <Text style={Style.text1}>E-mail
        <Text style={Style.text3}>*</Text>
        </Text>

        <TextInput
          style={Style.email}
          value={email}
          onChangeText={setEmail} // Atualiza o estado com o texto digitado
          placeholder="seuemail@exemplo.com"
        />

        <Text style={Style.text1}>Senha
        <Text style={Style.text3}>*</Text>
        </Text>

        <TextInput
          style={Style.senha}
          value={senha}
          onChangeText={setSenha} // Atualiza o estado com o texto digitado
          placeholder="Insira a sua senha"
          secureTextEntry={true} //adiciona omissão no que foi digitado
        />
        <Pressable style={Style.botaoVOLUNlogin}>
        <Link href="/tabs/Init">
          <Text style={Style.text}>
            Entrar
          </Text>
          </Link>

        </Pressable>

        <Pressable style={Style.botaoVOLUNCad}>
        <Link href="/tabslogvolu/CadVolu">
          <Text style={Style.text2}>Criar Conta</Text>
          </Link>
        </Pressable>
      </View>
    </View>
  );
}
