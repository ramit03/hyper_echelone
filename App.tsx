import React, { useEffect, useState } from 'react';
import HomePage from './src/views/HomePage';
import { StyleSheet } from 'react-native';
import Splash from './src/views/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/views/Login';
import { COLORS,SHADOWS } from './src/constants/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);

  if (initializing) return null;

  if(!user){
    return(
      <>
      <NavigationContainer>
          <Stack.Navigator initialRouteName='splash'
            screenOptions={()=>({
                headerShown: false
            })}
          >
            <Stack.Screen 
              name='splash'
              component={Splash}
            />
            <Stack.Screen 
              name='login'
              component={Login}
            />
             <Stack.Screen 
              name='homepage'
              component={HomePage}
            />
          </Stack.Navigator>
      </NavigationContainer>
      </>
    )
  }
  

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string;

              if (route.name === 'Home') {
                iconName = 'home'             
              } else if (route.name === 'Notifications') {
                iconName =  'bell'
              } else if (route.name === 'Profile') {
                iconName = 'account'
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.tertiary,
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {backgroundColor:COLORS.background}
          })}
          >
          <Tab.Screen
            name="Home"
            component={HomePage}
             
          />
          <Tab.Screen
            name="Notifications"
            component={Login}
          />
          <Tab.Screen
            name="Profile"
            component={HomePage}
            options={{
              tabBarLabel: 'Profile',           
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
