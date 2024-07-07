import React from 'react';
import Icon from '../Icon';
import styles from './exploreHeaderStyles';
import STRINGS from '../../constants/Strings';
import {Text, TouchableOpacity, View} from 'react-native';
import useNavigationHandler from '../../hooks/useNavigationHandler';

const Header = () => {
  const {handleNavigation} = useNavigationHandler();
  return (
    <View style={styles.actionRow}>
      <TouchableOpacity onPress={() => handleNavigation(STRINGS.BOOKING)}>
        <View style={styles.searchBtn}>
          <Icon type="Ionicons" name="search" size={24} />
          <View>
            <Text style={styles.title}>Where to?</Text>
            <Text style={styles.subTitle}>Anywhere · Any week</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterBtn}>
        <Icon type="Ionicons" name="options-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
