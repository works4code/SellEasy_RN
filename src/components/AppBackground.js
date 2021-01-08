import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// helpers
import COLORS from '../helpers/colors';
const AppBackground = ({children, style}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, style]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    paddingRight: 20,
  },
  subContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGOUND,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
});

export default AppBackground;
