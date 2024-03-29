import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import { AntDesign } from '@expo/vector-icons';
import { connect } from "react-redux";
// import { loginEmailAccount } from "../redux/actions/authActions";
// import Dashboard from "./DashBoard";

function LogInScreen({ navigation }) {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleUpdateState = (name, value) => {
    setDetails({ ...details, [name]: value });
  };

  const handleOnsubmit = () => {
    loginEmailAccount(details.email, details.password);
  };

  return (
    <View style={styles.mainContainer}>
      {/* <Image source={require('/Users/mac/Desktop/reactnative/AmpersandApp/ampersandapp/assets/officesetup.jpg')} style={styles.image} /> */}
      <View style={styles.welcomeText}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}> WELCOME BACK!</Text>
        <Text style={{ fontSize: 25, fontWeight: "200" }}>
          sign in to continue.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginHorizontal: 35,
            marginBottom: 7,
          }}
        >
          Email
        </Text>
        <TextInput
          value={details.email}
          onChangeText={(text) => {
            handleUpdateState("email", text);
          }}
          placeholderTextColor="gray"
          placeholder=" magnacarter@gmail.com"
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginHorizontal: 30,
            // marginBottom: 20,
            borderColor: "gray",
            backgroundColor: "#E2E6EE",
            borderRadius: 10,
            width: 312,
            height: 35,
            marginBottom: 20,
          }}
        />
      </View>

      {/* <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View> */}

      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            marginHorizontal: 35,
            marginBottom: 7,
            alignContent: "stretch",
          }}
        >
          Password
        </Text>

        <TextInput
          style={{
            alignSelf: "center",
            justifyContent: "center",
            marginHorizontal: 30,
            // marginBottom: 20,
            borderColor: "gray",
            backgroundColor: "#E2E6EE",
            borderRadius: 10,
            width: 312,
            height: 35,
          }}
          value={details.password}
          onChangeText={(text) => {
            handleUpdateState("password", text);
          }}
          placeholderTextColor="#aaaaaa"
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      {/* <View style={{backgroundColor:"#e6e7e8",height:2,width:330,marginBottom:10,marginLeft:15}}></View> */}

      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DashBoard");
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>sign in</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.DonthaveanAccountContainer}>
        <Text style={styles.NoAccountText}>dont have an account?</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        >
          <Text style={styles.SignUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#FFFCF0",
  },
  heading: {
    flexDirection: "row",
    backgroundColor: "red",
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
  },

  image: {
    height: 500,
    width: 500,
    flex: 0.5,
    marginBottom: 40,
  },
  buttonContainer: {
    height: 40,
    width: 215,
    backgroundColor: "#FD513B",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    borderRadius: 15,
    // marginLeft: 20,
    marginTop: 80,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#FD513B",
  },
  buttonText: {
    color: "#FFFCF0",
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
  forgotPassword: {
    flexDirection: "row",
    // marginLeft: 20,
    justifyContent: "center",
  },
  welcomeText: {
    alignSelf: "center",
    marginVertical: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  DonthaveanAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  SignUpText: {
    fontSize: 17,
    color: "#067EED",
    borderBottomColor: "#FD513B",

    borderBottomWidth: 2,

    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    // borderColor:'blue'
  },
  NoAccountText: {
    marginRight: 10,
    fontSize: 17,
  },
});

const mapStateToProps = (state) => {
  return { auth: state };
};
export default connect(mapStateToProps)(LogInScreen);
