import {useDispatch} from 'react-redux';
import React, {memo, useCallback} from 'react';
import IMAGES from '../constants/Images';
import {setHasSeenIntroCarousel} from '../redux/slices/appSlice';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import {width} from '../utils/apphelpers';
import Button from '../components/Button';
const data = [
  {
    id: '1',
    src: IMAGES.FAVICON,
    caption: 'Welcome to our App!',
  },
  {
    id: '2',
    src: IMAGES.IMAGE1,
    caption: 'Discover amazing features',
  },
  {
    id: '3',
    src: IMAGES.FAVICON,
    caption: 'Get Started Now!',
  },
];

const IntroCarousel = memo(() => {
  const dispatch = useDispatch();

  const onContinue = useCallback(() => {
    dispatch(setHasSeenIntroCarousel(true));
  }, [dispatch]);

  const renderItem = ({item}) => (
    <View style={styles.imageContainer}>
      <Image source={item.src} style={styles.image} />
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );
  console.log('IntroCarousel');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      />
      <View style={styles.footer}>
        <Button
          title="Continue"
          onPress={onContinue}
          accessibilityLabel="Continue to the main app"
        />
      </View>
    </SafeAreaView>
  );
});

export default IntroCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    width: width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  caption: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
