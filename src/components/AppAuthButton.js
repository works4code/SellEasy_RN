import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// helpers
import COLORS from '../helpers/colors';
// components
import AppText from './AppText';
const AppAuthButton = ({title, style, icon, iconBgColor, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: iconBgColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={icon} size={20} color={COLORS.WHITE} />
        </View>
        <AppText textStyle={styles.title}>{title}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.GOOGLE_BTN,
    // padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    width: '100%',
    marginTop: 7,
  },
  title: {
    color: COLORS.WHITE,
    marginHorizontal: 10,
  },
});

export default AppAuthButton;
