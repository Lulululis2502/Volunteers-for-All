import { TextInput, Image, Text, View, SafeAreaView, Pressable, ImageBackground,  } from "react-native";
import Style from "../../assets/StyleHPg";
import React, { useState } from 'react';
import { Link } from "expo-router";
import  Checkbox from 'expo-checkbox';

export default function Ident() {
  const [nome, setNome] = useState(''); // Mover para dentro do componente Ident
  const [email, setEmail] = useState(''); // Mover para dentro do componente Ident
  const [CNPJ, setCNPJ] = useState(''); // Mover para dentro do componente Ident
  const [senha, setSenha] = useState(''); // Mover para dentro do componente Ident
  const [confisenha, setConfiSenha] = useState(''); // Mover para dentro do componente Ident
  

  return (
    <View style={Style.container}>
      <ImageBackground
        style={Style.circulo}
        source={require('../../assets/images/circulos.jpeg')}
      />

     

      <View style={Style.containerlog2}>

        <Text style={Style.text1}>Nome completo
        <Text style={Style.text3}>*</Text>
        </Text>

        <TextInput
          style={Style.nome}
          value={nome}
          onChangeText={setNome} // Atualiza o estado com o texto digitado
          placeholder="Insira seu nome"
        />

        <Text style={Style.text1}>E-mail
        <Text style={Style.text3}>*</Text>
        </Text>

        <TextInput
          style={Style.email}
          value={email}
          onChangeText={setEmail} // Atualiza o estado com o texto digitado
          placeholder="seuemail@exemplo.com"
        />


        <Text style={Style.text1}>CNPJ
        <Text style={Style.text3}>*</Text>
        </Text>

        <TextInput
          style={Style.CNPJ}
          value={CNPJ}
          onChangeText={setCNPJ} // Atualiza o estado com o texto digitado
          keyboardType="numeric" // Isso configura o teclado para números
          placeholder="__.___.___/____-__"
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
        <Text style={Style.text1}>Confirmar Senha
        <Text style={Style.text3}>*</Text>
        </Text>

        <TextInput
          style={Style.confisenha}
          value={confisenha}
          onChangeText={setConfiSenha} // Atualiza o estado com o texto digitado
          placeholder="Confirme a sua senha"
          secureTextEntry={true} //adiciona omissão no que foi digitado
        />
         </View>

         <View style={Style.Viewbotaoong}>

        <Pressable style={Style.botaoONGsignup}>
          <Link href="/tabs/Init">
            <Text style={Style.text}>Criar Conta</Text>
          </Link>
        </Pressable>

        <Pressable style={Style.botaoONGCad}>
        <Link href="/tabslogong/LogOng">
          <Text style={Style.text2}>Já possuo uma conta</Text>
          </Link>
        </Pressable>

        </View>
    </View>
  );
}