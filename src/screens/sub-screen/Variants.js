import React from 'react';
import {View, Text} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Accordion from 'react-native-collapsible/Accordion';

// helpers
import COLORS from '../../helpers/colors';
import {HEIGHT, WIDTH} from '../../helpers/constants';
// components
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

const Variants = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          height: HEIGHT / 2.3,
          width: WIDTH - 30,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 200,
            width: 250,
            backgroundColor: COLORS.GRAY,
          }}></View>
        <AppText textStyle={{fontSize: 20}}>
          No variants are available there
        </AppText>
        <AppText
          textStyle={{fontSize: 14, color: COLORS.GRAY, textAlign: 'center'}}>
          There is no available to show. Please choose different filters and try
          again.
        </AppText>
        <AppButton
          title="add new Variants"
          leftIcon="add"
          leftIconColor={COLORS.WHITE}
          leftIconSize={20}
          leftIconStyle={{marginHorizontal: 7}}
        />
      </View>
    </View>
  );
};

export default Variants;
