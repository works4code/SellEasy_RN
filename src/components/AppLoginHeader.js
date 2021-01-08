import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
// helpers
import COLORS from '../helpers/colors';
import {WIDTH, HEIGHT} from '../helpers/constants';
// icon
import LOGO from '../images/Frame.png';
// components
import AppText from './AppText';

const AppLoginHeader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.iconContainer}>
          <Image
            source={LOGO}
            style={{tintColor: COLORS.WHITE, resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.txtContainer}>
          <AppText textStyle={styles.txt}>Welcome to </AppText>
          <AppText textStyle={[styles.txt, {color: COLORS.PRIMARY}]}>
            SellEasy
          </AppText>
        </View>
        <View style={styles.highlighterView} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT / 2.5,
    width: WIDTH,
    backgroundColor: COLORS.BACKGOUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  txt: {
    fontSize: 26,
    lineHeight: 33,
    fontWeight: '800',
  },
  descContainer: {
    marginTop: 7,
    padding: 10,
  },
  desc: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 2,
    fontWeight: '500',
    color: COLORS.GRAY,
  },
  highlighterView: {
    height: 20,
    marginTop: -20,
    borderRadius: 10,
    backgroundColor: COLORS.HIGHLIGHTER,
    width: 100,
    opacity: 0.15,
    marginLeft: 150,
  },
});

export default AppLoginHeader;
