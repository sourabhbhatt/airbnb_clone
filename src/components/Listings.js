import ListCard from './ListCard';
import FONTS from '../constants/Fonts';
import COLORS from '../constants/Colors';
import {defaultStyles} from '../constants/Styles';
import {View, Text, StyleSheet} from 'react-native';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import React, {useEffect, useRef, useState} from 'react';

const Listings = ({listings, refresh, category}) => {
  const listRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (refresh) {
      scrollListTop();
    }
  }, [refresh]);

  const scrollListTop = () => {
    listRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  return (
    <View style={[defaultStyles.container, {alignItems: 'center'}]}>
      <BottomSheetFlatList
        renderItem={({item}) => <ListCard item={item} />}
        data={loading ? [] : listings}
        ref={listRef}
        ListHeaderComponent={
          <Text style={styles.info}>{listings.length} homes</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: FONTS.MEDIUM,
  },
  rating: {
    fontFamily: FONTS.MEDIUM,
  },
  roomType: {
    fontFamily: FONTS.MEDIUM,
  },
  price: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.title,
    fontSize: 16,
  },
  night: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.subTitle,
    fontSize: 16,
  },
  info: {
    textAlign: 'center',
    fontFamily: FONTS.MEDIUM,
    fontSize: 16,
    marginTop: 4,
    color: '#000',
  },
});

export default Listings;
