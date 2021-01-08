import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
// components
import AppText from './AppText';
// helpers
import COLORS from '../helpers/colors';
import {WIDTH} from '../helpers/constants';

const AppButton = ({
  style,
  leftIcon,
  leftIconColor,
  leftIconSize,
  leftIconStyle,
  rightIcon,
  rightIconColor,
  rightIconSize,
  rightIconStyle,
  disabled,
  ref,
  title,
  onPress,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      ref={ref}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.AddProductsBtn,
        style,
        {backgroundColor: disabled ? COLORS.GRAY : COLORS.PRIMARY},
      ]}>
      {leftIcon && (
        <MIcons
          name={leftIcon}
          color={leftIconColor}
          size={leftIconSize}
          style={leftIconStyle}
        />
      )}
      <AppText textStyle={[{fontSize: 16, fontWeight: '700'}, titleStyle]}>
        {title.toUpperCase()}
      </AppText>
      {rightIcon && (
        <MIcons
          name={rightIcon}
          color={rightIconColor}
          size={rightIconSize}
          style={rightIconStyle}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  AddProductsBtn: {
    width: WIDTH - 26,
    backgroundColor: COLORS.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
  },
});

export default AppButton;
