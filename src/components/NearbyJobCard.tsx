import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed'
import { COLORS} from '../constants/theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
type Props = {}

const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={ ()=> handleNavigate}>
        <TouchableOpacity style={styles.logoContainer}>
        <Image source={{uri:job.employer_logo}} resizeMode='contain' style={{width:'70%', aspectRatio: 1}}/>
        </TouchableOpacity>
        <View style={{rowGap:8}}>
            <Text style={styles.jobTitle} numberOfLines={1}>{job.job_title}</Text>
            <View style={{flexDirection:'row',alignItems:'center',columnGap:4}}>
              <Text style={styles.jobType}>{job.job_employment_type}</Text>
            </View>          
        </View>
  </TouchableOpacity>
  )
}

export default NearbyJobCard

const styles = StyleSheet.create({
    card:{
        marginTop:12,       
        padding:12,
        width:'95%',
        alignSelf:'center', 
        backgroundColor: COLORS.tertiary,
        borderRadius:12,
        flexDirection:'row',
        columnGap:12
      },
    logoContainer:{
        width: 50,
        height: 50,
        backgroundColor: COLORS.textPrimary,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    jobType:{
        color:COLORS.textSecondary,
        fontSize:11
      },
    jobTitle:{
        color:COLORS.textPrimary,
        fontSize:18,
        fontWeight:'500',
      }
})