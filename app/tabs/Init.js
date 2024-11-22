import { TextInput, Image, Text, View, SafeAreaView, Pressable, ImageBackground } from "react-native";
import Style from "../../assets/StyleHPg";
import React, { useState } from 'react';
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';

export default function Ident() {

  const navigation = useNavigation();

    return (
      <SafeAreaView style={Style.container}>
        <Text>Tab [Home|Search]</Text>

        < View style={styles.topo}/>
          <TouchableOpacity 
            style={styles.roundButton} 
            onPress={() => navigation.openDrawer()}
      >
        <Icon name="menu" size={30} color="#000000" />         </TouchableOpacity>
        <Pressable  style={styles.btnpesqui}>
        <Link href="/tabs/Init"> 
        <Icon
       
        name="search" size={24} color="#007BFF" />
        </Link>
        </Pressable>

        <TextInput
          style={styles.pesquisabtn}
          placeholder='Pesquisar'
          
        />
        
        <Pressable style={styles.user} >
          <Link href="/tabs/Init"> 
            <Entypo style={styles.user2} name="user" size={40} color="#ffffff"/>
          </Link>
        </Pressable>
      </SafeAreaView>
    );
  }

  

  
