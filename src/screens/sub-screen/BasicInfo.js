import React, {useState} from 'react';
import {View} from 'react-native';
import {TextField} from 'react-native-material-textfield';
import ReactNativeChipInput from 'react-native-chip-input';
import {RNChipView} from 'react-native-chip-view';
// helpers
import COLORS from '../../helpers/colors';
import {WIDTH} from '../../helpers/constants';
// components
import AppText from '../../components/AppText';
import {color} from 'react-native-reanimated';

const BasicInfo = () => {
  const [tags, setTags] = useState([]);
  const tempArr = [];

  console.log('tags', tags);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2}}>
        <View style={{flex: 1, paddingHorizontal: 15}}>
          <TextField
            useNativeDriver
            label="Product Name"
            labelTextStyle={{
              fontSize: 12,
              fontWeight: '600',
              color: COLORS.GRAY,
            }}
            textColor={COLORS.WHITE}
            baseColor={COLORS.GRAY}
            animationDuration={250}
            tintColor={COLORS.PRIMARY}
            // containerStyle={{width: WIDTH / 2.5}}
            // ref={this.textInputRef2}
          />
          <TextField
            useNativeDriver
            label="SKU Number"
            labelTextStyle={{
              fontSize: 12,
              fontWeight: '600',
              color: COLORS.GRAY,
            }}
            textColor={COLORS.WHITE}
            baseColor={COLORS.GRAY}
            animationDuration={250}
            tintColor={COLORS.PRIMARY}
            // containerStyle={{width: WIDTH / 2.5}}
            // ref={this.textInputRef2}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextField
              useNativeDriver
              label="Old Price"
              labelTextStyle={{
                fontSize: 12,
                fontWeight: '600',
                color: COLORS.GRAY,
              }}
              textColor={COLORS.WHITE}
              baseColor={COLORS.GRAY}
              animationDuration={250}
              tintColor={COLORS.PRIMARY}
              containerStyle={{width: WIDTH / 2.5}}
              // ref={this.textInputRef2}
            />
            <TextField
              useNativeDriver
              label="Sell Price"
              labelTextStyle={{
                fontSize: 12,
                fontWeight: '600',
                color: COLORS.GRAY,
                fontFamily: 'NunitoSans-Bold',
              }}
              textColor={COLORS.WHITE}
              baseColor={COLORS.GRAY}
              animationDuration={250}
              tintColor={COLORS.PRIMARY}
              containerStyle={{width: WIDTH / 2.5}}
              // ref={this.textInputRef2}
            />
          </View>
          <TextField
            useNativeDriver
            label="Description"
            labelTextStyle={{
              fontSize: 12,
              fontWeight: '600',
              color: COLORS.GRAY,
              fontFamily: 'NunitoSans-Bold',
            }}
            textColor={COLORS.WHITE}
            baseColor={COLORS.GRAY}
            animationDuration={250}
            tintColor={COLORS.PRIMARY}
            multiline
            // containerStyle={{width: WIDTH / 2.5}}
            // ref={this.textInputRef2}
          />
          <TextField
            useNativeDriver
            label="TAGS"
            labelTextStyle={{
              fontSize: 12,
              fontWeight: '600',
              color: COLORS.GRAY,
            }}
            textColor={COLORS.WHITE}
            baseColor={COLORS.GRAY}
            animationDuration={250}
            tintColor={COLORS.PRIMARY}
            // containerStyle={{width: WIDTH / 2.5}}
            // ref={this.textInputRef2}
            // onChangeText={(text) => setTags(text)}
            onSubmitEditing={(text) => {
              tempArr.push(text), setTags(tempArr);
            }}
          />
          {tags.map((tag) => console.log('tag', tag))}

          {/* <ReactNativeChipInput
            inputVarint="contained"
            // showChipIcon={true}
            // chipIconAction={e => console.log(e)}
            // label="email"
            // autoCapitalize="none"
            // autoCorrect={false}
            // autoFocus={true}
            enableBackspaceDelete
            primaryColor="#1976d2"
            inputStyle={{borderBottomWidth: 1, borderWidth: 0}}
            secondaryColor="#ffffff"
            placeholderStyle={{color: COLORS.GRAY, fontFamily: ''}}
            placeholder="tags"
            inputTextStyle={{color: COLORS.WHITE}}
          /> */}
        </View>
      </View>
    </View>
  );
};

export default BasicInfo;
