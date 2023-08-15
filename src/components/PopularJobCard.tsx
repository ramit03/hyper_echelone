import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed'
import { COLORS } from '../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
type Props = {}

const PopularJobCard = ({item,selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity style={styles.card(selectedJob,item)} onPress={ ()=> handleCardPress(item)}>
        <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
        <Image source={{uri:item.employer_logo}} resizeMode='contain' style={{width:'70%', aspectRatio: 1}}/>
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
        <View>
            <Text style={styles.jobTitle} numberOfLines={1}>{item.job_title}</Text>
            <View style={{flexDirection:'row',alignItems:'center',columnGap:4}}>
              <Ionicons name='location-outline' color={COLORS.textPrimary} size={17}/>
              <Text>{item.job_country}</Text>
            </View>
           
        </View>
  </TouchableOpacity>
  )
}

export default PopularJobCard

const styles = StyleSheet.create({
    card: (selectedJob, item) => ({
        height:200,
        width:250,
        padding:24, 
        backgroundColor: selectedJob === item.job_id ? COLORS.secondary : COLORS.tertiary,
        borderRadius:12,
        justifyContent: "space-between",
      }),
      logoContainer: (selectedJob, item) => ({
        width: 50,
        height: 50,
        backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.textPrimary,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
      }),
      companyName:{
        color:COLORS.textSecondary,
      },
      jobTitle:{
        color:COLORS.textPrimary,
        fontSize:20,
        fontWeight:'500'
      }
})