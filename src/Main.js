import React, {memo} from 'react';
import {useSelector} from 'react-redux';
import IntroCarousel from './screens/IntroCarousel';
import RootStackScreen from './navigation/RootStackScreen';
import {NavigationContainer} from '@react-navigation/native';

const Main = memo(() => {
  const hasSeenIntroCarousel = useSelector(
    state => state?.app?.hasSeenIntroCarousel,
  );
  return hasSeenIntroCarousel ? (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  ) : (
    <IntroCarousel />
  );
});

export default Main;
