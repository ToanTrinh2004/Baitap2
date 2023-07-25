import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image } from 'react-native';

export default function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (text) => {
    setPassword(text);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.header}>Sign in</Text>
      </View>
      <TouchableOpacity style={styles.Back_but}
      onPress={() => {
              alert('Back !!');
            }}>
        <Image
        source={require('./assets/arrow.png')}
        style={styles.Back_img}>

        </Image>
      </TouchableOpacity>
      <View style={styles.body}>
        <Text style={{ marginTop: 50 }}>Email</Text>
        <TextInput
          style={styles.box}
          placeholder="Ex : 2251120326@ut.edu.vn"
        />
        <Text style={{ marginTop: 40 }}>Password</Text>
        <TextInput
          style={styles.box}
          placeholder="Enter your password"
          secureTextEntry={!showPassword} 
          value={password}
          onChangeText={handleInputChange}
        />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={() => {
              alert('Forgot password');
            }}
          >
            <Text style={styles.button}>Forgot password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleShowPassword}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          >
            <View>
              <Text style={styles.button}>Show Password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
      style={styles.login_but}
      onPress={() => {
              alert('Login !!!!');
            }}
      >
        <Text style={styles.login_content}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.text}>
        <Text
        style={{marginLeft:90}}>Don't have an account ? </Text>
        <TouchableOpacity style={{width:60,height:20,marginLeft:260,marginTop:-21}}>
        <Text
        style={{color:'blue'}}
        >Sign up</Text>
        </TouchableOpacity>
        <Image
        source={require('./assets/google.png')}
        style={styles.google_img}>
        </Image>
        <View style={styles.google_content}>
        <TouchableOpacity
        style={{width:125,height:30}}>
        <Text
        style={styles.google_content}>Login with Google</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Back_but:{
    marginTop:-25,
    marginLeft : 20,
    width : 30,
    height : 30
  ,
},
Back_img:{
  width:25,
  height:25,
  resizeMode:'contain'
}

  ,
  Middle: {
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 60,
    alignItems: 'center',
  },
  body: {
    marginLeft: 30,
  },
  box: {
    height: 45,
    backgroundColor: '#efeded',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 20,
  },
  buttonContainer: {
    width: 120, 
    marginLeft : 240,
    marginTop : -18,
  },
  forgotPasswordContainer: {
    marginLeft: 10, 
    marginTop: 10,
  },
  button: {
    color: 'blue',
    fontSize: 12,
    fontWeight : 'bold'
  },
  login_but :{
    height: 60,
    backgroundColor: '#7ec2ff',
    marginTop: 70,
    marginRight: 40,
    marginLeft: 40,
    borderRadius: 30,
    alignItems : 'center',
    justifyContent : 'center'
  },
  login_content:{
    color:'#fff',
    fontSize : 15,
    fontWeight : 'bold'
  },
  text:{
    marginTop :30,
    fontSize:8,
    justifyContent:'center'
  },
  google_img:{
    width:20,
    height:20,
    resizeMode:'contain',
    marginTop : 30,
    marginLeft :110
  },
  google_content:{
    alignItems:'center',
    marginTop : -10,
    
  }
});
