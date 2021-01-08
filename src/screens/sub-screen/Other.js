import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Pressable} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import Menu, {MenuItem} from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';
// helpers
import COLORS from '../../helpers/colors';
import {WIDTH} from '../../helpers/constants';
import AppButton from '../../components/AppButton';

const Other = () => {
  const [dropDownValue1, setDropDownValue1] = useState('');

  let dropDown1 = null;
  let dropDown2 = null;

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 15, flex: 1, marginTop: 10}}>
        <Menu
          style={{
            backgroundColor: COLORS.GRAY,
            width: '90%',
            marginVertical: 15,
          }}
          ref={(ref) => (dropDown1 = ref)}
          button={
            <Pressable
              onPress={() => {
                dropDown1.show();
              }}
              style={{
                borderBottomWidth: 1,
                borderColor: COLORS.GRAY,
                paddingVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                onPress={() => {
                  dropDown1.show();
                }}
                style={{
                  color: COLORS.GRAY,
                  fontSize: 16,
                  fontWeight: '600',
                }}>
                {dropDownValue1 === '' ? 'TAX TYPE' : dropDownValue1}
              </Text>
              <Icon name="chevron-down" size={25} color={COLORS.GRAY} />
            </Pressable>
          }>
          <MenuItem
            onPress={() => {
              // dropDown1.hide();
              // setDropDownValue1('first');
            }}>
            First item
          </MenuItem>
          <MenuItem
            onPress={() => {
              // dropDown1.hide();
              // setDropDownValue1('second');
            }}>
            Second item
          </MenuItem>
          <MenuItem
            onPress={() => {
              // dropDown1.hide();
              // setDropDownValue1('third');
            }}>
            Third item
          </MenuItem>
        </Menu>
        <TextField
          useNativeDriver
          label="Tax Percentage (%)"
          labelTextStyle={{fontSize: 12, fontWeight: '600', color: COLORS.GRAY}}
          textColor={COLORS.WHITE}
          baseColor={COLORS.GRAY}
          animationDuration={250}
          tintColor={COLORS.PRIMARY}
          suffix="%"
          keyboardType="numeric"
          // ref={this.textInputRef4}
          onChangeText={(text) => console.log('text', text)}
        />
        <View style={{marginTop: 20, flex: 1}}>
          <CheckBox
            checkedColor={COLORS.PRIMARY}
            title="Is Tax Inclusive in product price"
            containerStyle={{
              backgroundColor: COLORS.BACKGOUND,
              borderWidth: 0,
              marginVertical: 10,
            }}
            style={{marginVertical: 7}}
            textStyle={{
              color: COLORS.WHITE,
              fontWeight: 'normal',
              fontSize: 14,
            }}
            Component={TouchableWithoutFeedback}
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={true}
            iconType="material-community"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: 'grey'
            }}>
            <TextField
              label="Weight"
              style={{width: WIDTH / 2}}
              tintColor={COLORS.PRIMARY}
              containerStyle={{width: WIDTH / 2.5}}
              textColor={COLORS.WHITE}
              baseColor={COLORS.GRAY}
            />
            <View
              style={{
                width: WIDTH / 2,
                justifyContent: 'center',
                alignItems: 'stretch',
                marginTop: 9,
              }}>
              <Menu
                style={{
                  backgroundColor: COLORS.GRAY,
                  width: '100%',
                  marginVertical: 15,
                  alignSelf: 'baseline',
                }}
                ref={(ref) => (dropDown1 = ref)}
                button={
                  <Pressable
                    onPress={() => {
                      dropDown1.show();
                    }}
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: COLORS.GRAY,
                      paddingVertical: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      onPress={() => {
                        dropDown1.show();
                      }}
                      style={{
                        color: COLORS.GRAY,
                        fontSize: 16,
                        fontWeight: '600',
                      }}>
                      {dropDownValue1 === '' ? 'Unit' : dropDownValue1}
                    </Text>
                    <Icon name="chevron-down" size={25} color={COLORS.GRAY} />
                  </Pressable>
                }>
                <MenuItem
                  onPress={() => {
                    // dropDown1.hide();
                    // setDropDownValue1('first');
                  }}>
                  First item
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    // dropDown1.hide();
                    // setDropDownValue1('second');
                  }}>
                  Second item
                </MenuItem>
                <MenuItem
                  onPress={() => {
                    // dropDown1.hide();
                    // setDropDownValue1('third');
                  }}>
                  Third item
                </MenuItem>
              </Menu>
            </View>
          </View>
          <TextField
            label="Private Notes"
            multiline
            baseColor={COLORS.GRAY}
            tintColor={COLORS.PRIMARY}
            textColor={COLORS.WHITE}
          />
          <View
            style={{
              flex: 1,
              // backgroundColor: 'grey',
              justifyContent: 'flex-end',
              paddingVertical: 15,
            }}>
            <AppButton
              style={{alignSelf: 'flex-end'}}
              title="Save"
              onPress={() => console.log('Add products')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Other;
