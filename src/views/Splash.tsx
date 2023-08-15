import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS,FONT} from '../constants/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import jobImage from '../../assets/images/job.png';
import { Button } from '@rneui/themed';

type Step = {
  image: number;
  title: string;
  description: string;
};

const Splash = ({navigation}:any) => {
  const steps: Step[] = [
    {
      image: jobImage,
      title: 'Hyper-Speed Job Search',
      description:
        'Supercharge your job search with Hyper Echelone. Find opportunities at the speed of light.',
    },
    {
      image: require('../../assets/images/rocket.png'),
      title: 'Instant Applications',
      description:
        'Apply instantly. Your next job is just a tap away with our lightning-fast application process',
    },
    {
      image: require('../../assets/images/job.png'),
      title: 'Stay Ahead, Stay Hyper',
      description:
        'Stay updated, stay ahead. Hyper Echelone keeps you in the fast lane of your career journey.',
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prevStep =>
      prevStep >= steps.length - 1 ? 2 : prevStep + 1,
    );
  };

  const handleNextStep = () =>{
    if(currentStep ===steps.length-1) {
       navigation.navigate('login');
    }else{
      nextStep()
    };
  }

  const prevStep = () => {
    setCurrentStep(prevStep => (prevStep <= 0 ? 0 : prevStep - 1));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
        <ImageBackground
          style={{width: '100%', height: '100%',  justifyContent: 'center',alignItems: 'center',}}
          resizeMode={'cover'}
          source={require('../../assets/images/space.jpg')}>
          <View style={{flexDirection:'column',justifyContent:'space-evenly',paddingHorizontal:50,alignItems:'center',height:'100%'}}>
              <View style={{maxHeight:500, justifyContent:'space-evenly'}}>
                <Image
                  source={steps[currentStep].image}
                  style={styles.stepImage}
                  resizeMode="cover"
                />                
                <Text style={styles.title}>{steps[currentStep].title}</Text>
                <Text style={styles.description}>{steps[currentStep].description}</Text>
              </View>
              <View style={styles.stepIndicatorView}>
                {steps.map((step, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        ...styles.stepIndicator,
                        width: currentStep === index ? 40 : 30,
                        backgroundColor: currentStep === index ? COLORS.primary : 'transparent',
                      }}/>
                  );
                })}
              </View>
              <View style={styles.navigationView}>
                <Button 
                  type='solid'
                  onPress={handleNextStep} 
                  color={COLORS.primary}
                  raised
                  radius={100}>
                  <Icon name='navigate-next' color='white'  size={40}/>  
                </Button>          
              </View>
          </View>
         
        </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  stepImage: {
    width: '80%',
    height: 300,
    marginVertical: 30,
  },
  stepIndicatorView: {
    flexDirection: 'row',
  },
  stepIndicator: {
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
   // fontFamily:FONT.heading,
    fontWeight:'bold',
    fontSize: 36,
    textAlign:'center',
    marginBottom:40,
    color:COLORS.textPrimary,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 10,
    fontSize:18,

  },
  navigationView: {
    alignItems: 'center',
    width: '100%',
  },
  navigationBtn: {
    backgroundColor: '#A838D7',
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
