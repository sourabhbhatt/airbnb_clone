import Icon from './Icon';
import Listings from './Listings';
import FONTS from '../constants/Fonts';
import COLORS from '../constants/Colors';
import Colors from '../constants/Colors';
import BottomSheet from '@gorhom/bottom-sheet';
import React, {useRef, useMemo, useCallback} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ListingsBottomSheet = ({listings = [], category}) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['10%', '100%'], []);

  const onShowMap = useCallback(() => {
    bottomSheetRef.current?.collapse();
  }, []);

  return (
    <BottomSheet
      index={1}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
      handleIndicatorStyle={{backgroundColor: Colors.grey}}
      style={styles.sheetContainer}>
      <View style={styles.contentContainer}>
        <Listings listings={listings} category={category} />
        <TouchableOpacity onPress={onShowMap} style={styles.absoluteView}>
          <View style={styles.btn}>
            <Text style={styles.mapText}>Map</Text>
            <Icon type="Ionicons" name="map" size={20} color={COLORS.white} />
          </View>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  absoluteView: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: Colors.black,
    padding: 14,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  sheetContainer: {
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  mapText: {
    fontFamily: FONTS.MEDIUM,
    color: COLORS.white,
    fontSize: 16,
    marginRight: 10,
  },
});

export default ListingsBottomSheet;
