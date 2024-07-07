import React from 'react';
import Booking from '../screens/Booking';
import HomeScreen from '../screens/HomeScreen';
import useAuthCheck from '../hooks/useAuthCheck';
import OTPScreen from '../screens/auth/OTPScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DetailsPage from '../screens/DetailsPage/DetailsPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import STRINGS from '../constants/Strings';

const RootStack = createNativeStackNavigator();
export default function RootStackScreen() {
  useAuthCheck();
  return (
    <RootStack.Navigator initialRouteName={'Home'}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="profile" component={ProfileScreen} />
        <RootStack.Screen
          name="detailsPage"
          component={DetailsPage}
          options={{headerTitle: '', headerShown: true}}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name="auth"
          component={AuthScreen}
          options={{title: 'Welcome Back'}}
        />
        <RootStack.Screen name={STRINGS.BOOKING} component={Booking} />
        <RootStack.Screen name="otp" component={OTPScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
