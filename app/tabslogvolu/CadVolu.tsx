import { TextInput, Image, Text, View, SafeAreaView, Pressable, ImageBackground } from "react-native";
import Style from "../../assets/StyleHPg";
import React, { useState } from 'react';
import { Link } from "expo-router";

export default function Ident() {
  const [nome, setNome] = useState(''); // Mover para dentro do componente Ident
  const [email, setEmail] = useState(''); // Mover para dentro do componente Ident
  const [CPF, setCPF] = useState(''); // Mover para dentro do componente Ident
  const [senha, setSenha] = useState(''); // Mover para dentro do componente Ident
  const [confisenha, setConfiSenha] = useState(''); // Mover para dentro do componente Ident

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

        <Text style={Style.text1}>Nome completo</Text>

        <TextInput
          style={Style.nome}
          value={nome}
          onChangeText={setNome} // Atualiza o estado com o texto digitado
          placeholder="Insira seu nome"
        />

        <Text style={Style.text1}>E-mail</Text>

        <TextInput
          style={Style.email}
          value={email}
          onChangeText={setEmail} // Atualiza o estado com o texto digitado
          placeholder="seuemail@exemplo.com"
        />


        <Text style={Style.text1}>CPF</Text>

        <TextInput
          style={Style.CPF}
          value={CPF}
          onChangeText={setCPF} // Atualiza o estado com o texto digitado
          keyboardType="numeric" // Isso configura o teclado para números
          placeholder="___.___.___-__"
        />

        <Text style={Style.text1}>Senha</Text>

        <TextInput
          style={Style.senha}
          value={senha}
          onChangeText={setSenha} // Atualiza o estado com o texto digitado
          placeholder="Insira a sua senha"
          secureTextEntry={true} //adiciona omissão no que foi digitado
        />
        <Text style={Style.text1}>Confirmar Senha</Text>

        <TextInput
          style={Style.confisenha}
          value={confisenha}
          onChangeText={setConfiSenha} // Atualiza o estado com o texto digitado
          placeholder="Confirme a sua senha"
          secureTextEntry={true} //adiciona omissão no que foi digitado
        />
        <Pressable style={Style.botaoVOLUNsignup}>
          <Link href="/tabs/Init">
            <Text style={Style.text2}>Criar Conta</Text>
          </Link>
        </Pressable>

      </View>
    </View>
  );
}