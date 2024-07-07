import Icon from './Icon';
import React, {memo, useCallback} from 'react';
import Animated from 'react-native-reanimated';
import useNavigationHandler from '../hooks/useNavigationHandler';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ListCard = memo(({item}) => {
  const id = item?.id;
  const {handleNavigation} = useNavigationHandler();

  const onPressCard = useCallback(
    () => handleNavigation('detailsPage', {id}),
    [id],
  );

  return (
    <TouchableOpacity onPress={onPressCard}>
      <Animated.View style={styles.card}>
        <Animated.Image source={{uri: item.medium_url}} style={styles.image} />
        <TouchableOpacity style={styles.heart}>
          <Icon type="Ionicon" name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.row}>
            <Icon type="Ionicon" name="star" size={16} />
            <Text style={styles.rating}>{item.review_scores_rating / 20}</Text>
          </View>
        </View>
        <Text style={styles.roomType}>{item.room_type}</Text>
        <View style={styles.row}>
          <Text style={styles.price}>€ {item.price}</Text>
          <Text style={styles.night}>night</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
});

export default ListCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  heart: {position: 'absolute', right: 30, top: 30},
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {flexDirection: 'row', gap: 4},
});
