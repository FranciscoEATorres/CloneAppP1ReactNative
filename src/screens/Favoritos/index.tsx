import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "../Favoritos/styles";
import LogoPrivalia from "../../assets/logo1.png";
import { Ionicons } from "@expo/vector-icons";
import Mengo from "../../assets/fla1.png";
import Mengao from "../../assets/fla2.png";
import { MaterialIcons } from "@expo/vector-icons";

export const Favoritos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image style={styles.image} source={LogoPrivalia} />
        <View style={styles.topBar1}>
          <Text style={styles.topBar1}>Entrar</Text>
          <Text style={styles.topBar2}>Crie uma conta</Text>
        </View>
      </View>

      <View style={styles.searchbar}>
        <TextInput
          style={styles.input}
          keyboardType={"default"}
          placeholder="       "
        />
        <MaterialIcons name="border-all" size={50} color="black" />
      </View>

      <View>
        <Image style={styles.imagePost} source={Mengo} />
      </View>

      <Text style={styles.text}>DESTAQUES</Text>
      <View>
        <Image style={styles.imagePost2} source={Mengao} />
      </View>
    </View>
  );
};
