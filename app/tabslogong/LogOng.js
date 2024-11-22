import { TextInput, Image, Text, View, SafeAreaView, Pressable, ImageBackground, TouchableOpacity} from "react-native";
import Style from "../../assets/StyleHPg";
import React, { useState } from 'react';
import { Link, useNavigation } from "expo-router";
 //(ESTOU IMPORTANDO DE MANEIRA ERRADA ESTE ICON DE UMA BIBLIOTECA, DEIXAR DE LADO POR ENQUANTO) Importando o ícone da seta para a esquerda import { ArrowLeftOutlined } from '@ant-design/icons';         <ArrowLeftOutlined style={{ color: '#66788A', fontSize: 28 }}></ArrowLeftOutlined>


export default function Ident() {
 const [email, setEmail] = useState ('');
 const [senha, setSenha] = useState ('');
 const navigation = useNavigation();

 return (
    

    <View 
        style={Style.container}>

    <ImageBackground
    style={Style.circulo} source={require("../../assets/images/circulos.jpeg")}/>

    {/* ( DA BIBLIOTECA DE ANTES ) <TouchableOpacity style={Style.backButton} onPress={() => navigation.goBack()}>
    </TouchableOpacity> */}

    <Image style={Style.logo} source={require("../../assets/images/logo-fake.jpeg")}/>
        
    <View style={Style.containerlog}>
        <Text style={Style.text1}>Email
            <Text style={Style.text3}>*</Text>
        </Text> 

        <TextInput
          style={Style.email}
          value={email}
          onChangeText={setEmail}
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
        <Pressable style={Style.botaoONGlogin}>
        <Link href="/tabs/Init">
          <Text style={Style.text}>
            Entrar
          </Text>
          </Link>

        </Pressable>

        <Pressable style={Style.botaoONGCad}>
        <Link href="/tabslogong/CadOng">
          <Text style={Style.text2}>Criar Conta</Text>
          </Link>
        </Pressable>


        </View>
    </View>
)}