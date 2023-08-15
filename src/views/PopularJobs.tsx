import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@rneui/base';
import { COLORS } from '../constants/theme';
import useFetch from '../hook/useFetch';
import { Image } from '@rneui/themed';
import PopularJobCard from '../components/PopularJobCard';

type Props = {}

const Popularjobs = (props: Props) => {
  
  const { data, isLoading, error } = useFetch('search',{query:'React developer', num_pages: 1})

  console.log(data);
  const [selectedJob, setSelectedJob] = useState();
  const handleCardPress = (item) => {
    setSelectedJob(item.job_id);
  };

  return (
    <View style={{justifyContent:'flex-start',width:'100%',marginTop:24,paddingHorizontal:12}}>
      {/* <Text style={{color:COLORS.textPrimary,fontSize:22}}>Popular Jobs</Text> */}
      {isLoading ? (
        <ActivityIndicator style={{height:100,marginTop:12}} size='large' color={COLORS.primary}/>
      ):(
        <FlatList
            data={data}
          renderItem={({item}) => (
            <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress}/>
          )}
          keyExtractor={(item) => item.job_id}
          contentContainerStyle={{columnGap:24,marginTop:12,paddingHorizontal:12}}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      )}
    </View>
  )
}

export default Popularjobs

const styles = StyleSheet.create({
 
})