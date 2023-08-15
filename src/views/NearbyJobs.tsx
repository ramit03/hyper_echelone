import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme';
import useFetch from '../hook/useFetch';
import { Button, Image } from '@rneui/themed';
import NearbyJobCard from '../components/NearbyJobCard';

type Props = {
    navigate(arg0: string, arg1: { jobId: string; }): unknown;
}

const NearbyJobs = (navigation: Props) => {
    const { data, isLoading, error } = useFetch('search',{query:'React native reactjs', num_pages: 1})
    console.log(data);
    return (
      <View style={{justifyContent:'flex-start',width:'100%',marginTop:24,paddingHorizontal:12}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
             <Text style={{color:COLORS.textPrimary,fontSize:22}}>Jobs near You</Text>
             <Button color={COLORS.primary} size='sm'>Show All</Button> 
        </View>
        {isLoading ? (
          <ActivityIndicator style={{height:100,marginTop:12}} size='large' color={COLORS.primary}/>
        ):(
            data?.map((job) =>(
                <NearbyJobCard 
                    job={job}
                    key={`nearby-job-${job?.job_id}`}    
                    handleNavigate={()=>navigation.navigate('job-details',{jobId:job_id})}
                />
            ))
        )}
      </View>
    )
  }

export default NearbyJobs

const styles = StyleSheet.create({})