import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS,FONT } from '../constants/theme'
import { Button, Input,Icon, Image } from '@rneui/themed'
import  AntDesign  from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { color } from '@rneui/base'
import { TouchableOpacity } from 'react-native'
import { authService } from '../helpers/auth.provider'

const Login = ({navigation}:any) => {
    const [passVisible,setPassVisible] = useState(false);

    const handlePassWordVisible = () =>{
      setPassVisible(!passVisible);
    }

    const googleLogin = () => {
        authService.handleGoogleSignin()
          .then((response) =>{
              if(response?.user.email!=null){
                navigation.navigate('homepage')
              }
              console.log('Google Test',response)
          }).catch((error) =>{
            console.log(error)
          })

    }

  return (
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.background}}>
        <View style={{width:'100%',flex:1,height:'100%', justifyContent:'space-evenly',paddingTop:50,paddingHorizontal:40}}>
          <View style={{position:'absolute',top:0,left:-30,}}>
            <Image source={require('../../assets/images/moon.jpg')} style={{width:200, height:200,resizeMode: 'cover'}}/>
          </View>
          <Text style={{color:COLORS.textPrimary,fontSize:40,fontWeight:'500',alignSelf:'center'}}>Login</Text>
          <View style={{flexDirection:'row',justifyContent:'center',columnGap:48,width:'100%'}}>
              <Button
              radius={100}
              color={COLORS.tertiary}
              containerStyle={{width:64,height:64,alignSelf:'center' }}
              onPress={googleLogin}
              >
                <AntDesign name='google' size={46} color={COLORS.textPrimary}/>
              </Button>
              <Button
              radius={100}
              color={COLORS.tertiary}
              containerStyle={{width:64,height:64,alignSelf:'center' }}
              >
                <AntDesign name='apple1' size={44} color={COLORS.textPrimary}/>
              </Button>
          </View>
          <Text style={{color:COLORS.textPrimary,fontSize:18, alignSelf:'center'}}>or</Text>
          <View style={{flexDirection:'column'}}>
            <Input 
              placeholder='Email'
              leftIcon={{type:'material-icons', name: 'alternate-email', color: COLORS.secondary}}
              style={{color:COLORS.textPrimary}}
              keyboardType='email-address'
            />
            <Input 
              placeholder='Password'
              secureTextEntry={passVisible === false? true: false}
              leftIcon={{type:'material-icons', name: 'password', color: COLORS.secondary}}
              style={{color:COLORS.textPrimary}}
              rightIcon={
                <TouchableOpacity onPress={handlePassWordVisible}>
                  <Feather  name = {passVisible === false? 'eye' : 'eye-off'} color= {COLORS.secondary} size={24}/>
                </TouchableOpacity>
              }              
            />
            <Button
              color={COLORS.primary}
              radius={4}
              titleStyle={{color:COLORS.textPrimary,fontWeight:'600',fontSize:18}}
              containerStyle={{marginVertical:20}}
              onPress={()=>{navigation.navigate('homepage')}}
            >Login</Button>
          </View>
        </View>  
      
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})