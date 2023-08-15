import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants/theme'
import { Image } from '@rneui/themed'
import IonIcons from 'react-native-vector-icons/Ionicons'
type Props = {}

const Header = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
        <IonIcons name='search' color={COLORS.secondary} size={22}/>
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height:55,
        backgroundColor:COLORS.background,
        borderBottomColor:COLORS.secondary,
        borderBottomWidth:1,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingRight:20
    },
    logo:{
        width:250,
        height:20,

    }
})