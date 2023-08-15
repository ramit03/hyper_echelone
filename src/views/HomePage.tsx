import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { COLORS, SIZES } from '../constants/theme'
import Header from '../components/header'
import Swiper from 'react-native-swiper'
import { ImageBackground } from 'react-native'
import { FlatList } from 'react-native'
import { Image } from '@rneui/themed'
import Popularjobs from './PopularJobs'
import NearbyJobs from './NearbyJobs'
import { ScrollView } from 'react-native-gesture-handler'

const swiperData = [
  {
    image:require('../../assets/images/job.png'),
    title: 'Frontend dev',
    company: 'Google'
  },
  {
    image:require('../../assets/images/moon.jpg'),
    title: 'Reactjs dev',
    company: 'Meta'
  },
  {
    image:require('../../assets/images/job.png'),
    title: 'React Native dev',
    company: 'Spotify'
  }

]

const HomePage = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.background}}>
        <Header/>
      <ScrollView contentContainerStyle={{width:'100%',height:'auto',paddingVertical:12,alignItems:'center',marginTop:30}} showsVerticalScrollIndicator={false}
         >
        <Text style={[styles.title,{alignSelf:'flex-start',fontSize:26,marginLeft:12,marginBottom:24}]}>Recommended Jobs for you</Text>
        {/* <Swiper autoplay={true} autoplayTimeout={2} style={styles.swiperWrapper} showsPagination={false}>
            {swiperData.map((item,index) =>(             
                  <View style={styles.swiperSlider} key={index}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Image source={item.image} style={styles.logoImage} key={index}/>
                      <View style={styles.tag}><Text style={{color:COLORS.textPrimary}}>Tag</Text></View>
                    </View>
                    <Text style={styles.title}>{item.company}</Text>
                    <Text style={styles.text}>{item.title}</Text>
                  </View>                
            ))}          
        </Swiper> */}
        <Popularjobs />
        <NearbyJobs />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({
  swiperWrapper: {
  },
  swiperSlider: {
    height:250,
    justifyContent:'center',
    alignItems:'center',
    padding:0,
    width:'100%',
    backgroundColor:COLORS.tertiary
  },
  text:{
    color: COLORS.textSecondary,
    fontSize: 22,
  },
  title:{
    color: COLORS.textPrimary,
    fontSize:32,
    fontWeight:'bold'
  },
  logoImage:{
    width:40,
    height:40,
  },
  tag :{
    borderRadius:4,
    width:50,
    height:40,
    padding:5,
    backgroundColor:COLORS.textSecondary
  }
})