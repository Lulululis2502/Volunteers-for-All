import { TextInput, Image, Text, View, SafeAreaView, Pressable, ImageBackground } from "react-native";
import Style from "../../assets/StyleHPg";
import React, { useState } from 'react';
import { Link } from "expo-router";

return (
    <View style={Style.container}>
      <ImageBackground
        style={Style.circulo}
        source={require('../../assets/images/circulos.jpeg')}
      />

