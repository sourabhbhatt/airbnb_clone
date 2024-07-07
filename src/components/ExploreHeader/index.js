import React, {memo} from 'react';
import Header from './Header';
import Categories from './Categories';
import styles from './exploreHeaderStyles';
import {View, SafeAreaView} from 'react-native';

const ExploreHeader = memo(({onCategoryChanged = () => {}}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <Categories selectCategory={onCategoryChanged} />
      </View>
    </SafeAreaView>
  );
});

export default ExploreHeader;
