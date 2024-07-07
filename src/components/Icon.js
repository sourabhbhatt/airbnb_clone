import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({
  name = 'language',
  type = 'Entypo',
  style = {},
  color = '#000',
  size = 20,
  onPress,
  containerStyle = {},
}) => {
  const iconContainerStyle = Array.isArray(containerStyle)
    ? containerStyle
    : [containerStyle];

  var CustomIcon;
  switch (type) {
    case 'AntDesign':
      CustomIcon = AntDesign;
      break;
    case 'Entypo':
      CustomIcon = Entypo;
      break;
    case 'EvilIcons':
      CustomIcon = EvilIcons;
      break;
    case 'Feather':
      CustomIcon = Feather;
      break;
    case 'FontAwesome':
      CustomIcon = FontAwesome;
      break;
    case 'FontAwesome5':
      CustomIcon = FontAwesome5;
      break;
    case 'Fontisto':
      CustomIcon = Fontisto;
      break;
    case 'Foundation':
      CustomIcon = Foundation;
      break;
    case 'Ionicons':
      CustomIcon = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      CustomIcon = MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      CustomIcon = MaterialIcons;
      break;
    case 'Octicons':
      CustomIcon = Octicons;
      break;
    case 'SimpleLineIcons':
      CustomIcon = SimpleLineIcons;
      break;
    case 'Zocial':
      CustomIcon = Zocial;
      break;
    default:
      CustomIcon = Ionicons;
      break;
  }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[...iconContainerStyle]}>
      <CustomIcon name={name} style={style} color={color} size={size} />
    </TouchableOpacity>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Icon;
