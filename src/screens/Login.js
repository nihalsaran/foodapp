import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore';

const Login = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const adminLogin = async () => {
    const users = await firestore().collection('admin').get();
    console.log(users.password + "  " + password)
    if (email == users.docs[0]._data.email &&
      password == users.docs[0]._data.password) {
      navigation.navigate('Dashboard');
    }
    else {
      alert("Wrong email and password")
    }

  };
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Admin Login
      </Text>
      <TextInput style={styles.inputStyle} placeholder={'Enter Email Id'}
        value={email}
        onChangeText={txt => setEmail(txt)} />
      <TextInput style={styles.inputStyle} placeholder={'Enter password'}
        value={password}
        onChangeText={txt => setPassword(txt)}
      />
      <TouchableOpacity style={styles.loginbtn} onPress={() => {

        if (email !== '' && password !== '') {
          adminLogin()
        }
        else {
          alert("Please enter data");
        }


      }}>
        <Text style={styles.btnText}>
          Login
        </Text>

      </TouchableOpacity>

    </View>
  )
}

export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    marginTop: 200,

    alignSelf: 'center',

  },

  inputStyle: {
    paddingLeft: 20,
    height: 50,
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '90%'

  },

  loginbtn: {
    backgroundColor: 'orange',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',



  },

  btnText: {
    fontSize: 18,
    fontWeight: "600",
    color: '#000',
  }


})
