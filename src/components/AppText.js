import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from '../helpers/colors';

const AppText = ({children, textStyle}) => {
  return <Text style={[styles.text, textStyle]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    lineHeight: 21,
    fontSize: 15,
    color: COLORS.WHITE,
    fontFamily: 'NunitoSans-Bold',
  },
});

export default AppText;
