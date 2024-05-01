import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import AuthForm from "./AuthForm";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const Auth = ({ isLogin = false, onAuthenticate={onAuthenticate} }) => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleNavigation = () => {
    navigation.replace(isLogin ? "Signup" : "Login");
  };

  const handleValidation = () => {
    let isValid = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters including at least a letter, a number, and a special character"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isLogin && confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (handleValidation()) {
      console.log("Form is valid");
      onAuthenticate({ email, password });
      // Proceed with navigation or other actions
      navigation.navigate('BottomNavigation')
    } else {
      navigation.navigate('BottomNavigation')
      console.log("Form validation failed");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("../../assets/movie_list_background.jpeg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.overlay} />

          <Image
            source={require("../../assets/vector_logo.png")}
            style={styles.image}
          />
          <AuthForm
            label="E-mail:"
            placeholder="Enter your email address"
            onChangeText={setEmail}
            error={emailError}
          />
          <AuthForm
            label="Password:"
            placeholder="Enter your password"
            onChangeText={setPassword}
            error={passwordError}
          />
          {!isLogin && (
            <AuthForm
              label="Confirm Password:"
              placeholder="Re-enter your password"
              onChangeText={setConfirmPassword}
              error={confirmPasswordError}
            />
          )}
          <TouchableOpacity style={styles.authButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>
              {isLogin ? "Login" : "Sign up"}
            </Text>
          </TouchableOpacity>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                isChecked ? styles.checkboxChecked : null,
              ]}
              onPress={handleCheckboxToggle}
            />
            <Text
              style={[
                styles.rememberMeText,
                isChecked ? styles.rememberMeTextChecked : null,
              ]}
            >
              Remember me
            </Text>
          </View>
          <TouchableOpacity
            style={styles.signupLogin}
            onPress={handleNavigation}
          >
            <Text style={styles.navigationText}>
              {isLogin ? "Don't have an account? " : "Already on Netflix? "}
              <Text style={styles.navigationLink}>
                {isLogin ? "SIGN UP" : "LOGIN"}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 15,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
  },
  image: {
    width: 80,
    height: 80,
    margin: 20,
  },
  authButton: {
    backgroundColor: "red",
    padding: 14,
    paddingLeft: 105,
    paddingRight: 105,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "white",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "red",
    borderColor: "red",
  },
  rememberMeText: {
    color: "white",
  },
  signupLogin: {
    marginTop: 20,
  },
  navigationText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
  navigationLink: {
    color: "white",
    fontWeight: "900",
    fontSize: 16,
  },
});
