import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  Pressable,
  ImageBackground,
  TextInput,
} from "react-native";
import { styles } from "./LoginScreen.styles";
import { useState } from "react";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  return (
    <ImageBackground
      style={styles.imgBack}
      source={require("../../../assets/images/background.webp")}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarImg}></View>
            <Image
              style={styles.avatarBtn}
              source={require("../../../assets/images/add.png")}
            />
          </View>
          <Text style={styles.text}>Увійти</Text>
          <View style={styles.form}>
            <TextInput
              inputMode="email"
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onChangeText={setEmail}
            />
            <View style={styles.passContainer}>
              <TextInput
                secureTextEntry={hidePass}
                style={styles.input}
                placeholder="Пароль"
                onChangeText={setPassword}
              />
              <Pressable
                style={styles.passBtn}
                onPressIn={() => setHidePass(false)}
                onPressOut={() => setHidePass(true)}
              >
                <Text>Показати</Text>
              </Pressable>
            </View>
            <Pressable
              style={styles.singUpBtn}
              onPress={() => console.log(login, email, password)}
            >
              <Text style={styles.singUpText}>Зареєстуватися</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("SingUp")}>
              <Text style={styles.singInText}>
                <Text>Немає акаунту? </Text>
                <Text style={{ borderBottomWidth: 1 }}>Зареєструватися</Text>
              </Text>
            </Pressable>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
};
