import {StyleSheet, View} from 'react-native';
import ListingsMap from '../components/ListingsMap';
import React, {useLayoutEffect, useState} from 'react';
import ExploreHeader from '../components/ExploreHeader';
import listingsData from '../assets/data/airbnb-listings.json';
import ListingsBottomSheet from '../components/ListingsBottomSheet';
import listingsDataGeo from '../assets/data/airbnb-listings.geo.json';

const HomeScreen = ({navigation}) => {
  const [category, setCategory] = useState('Tiny homes');
  const onDataChanged = (item = '') => setCategory(item);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Explore',
      header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ListingsMap listings={listingsDataGeo} />
      <ListingsBottomSheet listings={listingsData} category={category} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
  },
});

export default HomeScreen;
