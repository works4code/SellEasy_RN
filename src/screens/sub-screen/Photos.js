import React from 'react';
import {View, Text} from 'react-native';
import {TextField} from 'react-native-material-textfield';
// helpers
import COLORS from '../../helpers/colors';

const Photos = () => {
  return (
    <View style={{flex: 1}}>
      <Text style={{color: COLORS.WHITE}}>Photos</Text>
    </View>
  );
};

export default Photos;
