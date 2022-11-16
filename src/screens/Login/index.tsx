import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "../Login/styles";
import LogoPrivalia from "../../assets/privalia-logo.png";
import { Ionicons } from "@expo/vector-icons";
// import AppLoading from 'expo-app-loading';

export const Login = () => {
  //  <AppLoading />

  return (
    <View style={styles.container}>
      
      <View style={styles.topBar}>
        <Image style={styles.image} source={LogoPrivalia} />
        <Ionicons
          style={styles.icone}
          name="person-outline"
          size={25}
          color="black"
        />
      </View>

      <Text style={styles.titleCampos}>*Campos obrigatórios</Text>

      <TextInput
        style={styles.input}
        keyboardType={"email-address"}
        placeholder={"Insira seu e-mail"}
      />

      <TextInput
        style={styles.input}
        placeholder={"Digite sua senha"}
        secureTextEntry={true}
      />
      <Text style={styles.textLoginOb}>
        Você deve efetuar o login para entrar nesta seção.
      </Text>

      <Text style={styles.text}>Esqueceu a senha?</Text>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2}>
        <Text style={styles.buttonText2}>Crie uma conta</Text>
      </TouchableOpacity>
    </View>
  );
};
