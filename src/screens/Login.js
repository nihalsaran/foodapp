import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Login = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Admin Login
      </Text>
      <TextInput style={styles.inputStyle} placeholder={'Enter Email Id'} />
      <TextInput style={styles.inputStyle} placeholder={'Enter password'}/>
      <TouchableOpacity style={styles.loginbtn}>
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

  loginbtn:{
    backgroundColor:'orange',
    width:'90%',
    height: 50,
    alignSelf:'center',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignItems:'center',



  },

  btnText:{
    fontSize: 18,
    fontWeight: "600",
    color: '#000',  
  }


})
