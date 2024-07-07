import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import COLORS from '../../constants/Colors';
import FONTS from '../../constants/Fonts';

const Button = memo(
  ({
    type = 'primary',
    title = 'Button',
    onPress,
    style,
    titleStyle,
    ...props
  }) => {
    const combinedStyle = Array.isArray(style) ? style : [style];
    const combinedTitleStyle = Array.isArray(titleStyle)
      ? titleStyle
      : [titleStyle];

    return (
      <TouchableOpacity
        {...props}
        activeOpacity={0.7}
        style={[styles.container, styles[type], ...combinedStyle]}
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={title}>
        <Text style={[styles.title, ...combinedTitleStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {backgroundColor: COLORS.primaryButton},
  secondary: {backgroundColor: COLORS.secondaryButton},
  tertiary: {backgroundColor: COLORS.tertiaryButton},
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.title,
    fontFamily: FONTS.MEDIUM,
  },
});
