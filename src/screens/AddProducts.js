import React, {Component, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
// helpers
import COLORS from '../helpers/colors';
import {WIDTH} from '../helpers/constants';
// components
import AppText from '../components/AppText';
// router
import {topTabs} from '../../Router';

const AddProducts = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.BACKGOUND}}>
      <StatusBar translucent backgroundColor={COLORS.SECONDARY} />
      <SafeAreaView
        style={{
          height: WIDTH / 4,
          width: '100%',
          backgroundColor: COLORS.SECONDARY,
          marginTop: Platform.OS === 'android' ? 7 : 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{paddingHorizontal: 15}}>
            <MIcons name="arrow-back-ios" size={20} color={COLORS.WHITE} />
          </TouchableOpacity>
          <View>
            <AppText textStyle={{fontSize: 20, fontWeight: '700'}}>
              Add Product
            </AppText>
          </View>
          <View style={{height: 40, width: 40}} />
        </View>
      </SafeAreaView>
      {topTabs()}
    </View>
  );
};

export default AddProducts;
