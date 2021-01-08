import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import Picker from '@gregfrench/react-native-wheel-picker';
import {CheckBox} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
// helpers
import COLORS from '../helpers/colors';
import {WIDTH} from '../helpers/constants';
// components
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
// styles
import styles from './styles/CreateCatalog.styles';

const DATA = [
  {
    id: '1',
    title: 'Arts & Crafts',
    desc: 'Shop art supplies including drawing, crafting, and jewelry making',
    icon: 'palette',
    isSelected: false,
  },
  {
    id: '2',
    title: 'Automotive and Car Care',
    desc:
      'car care, car accessories, oils and fluids, tools, and replacement parts',
    icon: 'local-car-wash',
    isSelected: false,
  },
  {
    id: '3',
    title: 'The Baby Store',
    desc: 'Shop art supplies including drawing, crafting, and jewelry making',
    icon: 'child-friendly',
    isSelected: false,
  },
  {
    id: '4',
    title: 'Beauty and Personal Care',
    desc: 'Baby toys, clothing, formula, diaper, and maternity products',
    icon: 'brush',
    isSelected: false,
  },
  {
    id: '5',
    title: 'Books & magazine',
    desc: 'Digital Books and More Magazine on Magzter and enjoy reading',
    icon: 'local-library',
    isSelected: false,
  },
  {
    id: '6',
    title: 'Home and Kitchen',
    desc: 'Kitchen and dinning, bedding, bath, furniture, home décor and more',
    icon: 'free-breakfast',
    isSelected: false,
  },
  {
    id: '7',
    title: 'Computers, Tablets & IT Accessories',
    desc: 'Baby toys, clothing, formula, diaper, and maternity products',
    icon: 'important-devices',
    isSelected: false,
  },
];

const CreateCatalog = () => {
  const [categories, setCategories] = useState(DATA);
  const [selectedItem, setSelectedItem] = useState();
  const [radio1, setRadio1] = useState(false);
  const [radio2, setRadio2] = useState(false);
  const [catalogName, setCatalogName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGOUND,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <View style={{flex: 1, marginTop: 10}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtnStyle}>
          <MIcons name="arrow-back-ios" color={COLORS.GRAY} size={15} />
          <AppText textStyle={styles.backBtnText}>Back</AppText>
        </TouchableOpacity>
        <View style={{flex: 1, padding: 10}}>
          <View style={{flex: 1, marginTop: 15}}>
            <AppText textStyle={styles.titleText}>Create Catalogue</AppText>
            <AppText textStyle={{color: COLORS.GRAY, marginTop: 7}}>
              Give a name to your catalog. E.x XYZ Product
            </AppText>
            <View style={styles.textInputContainer}>
              <TextInput
                style={{color: COLORS.WHITE}}
                placeholderTextColor={COLORS.BORDER_COLOR}
                placeholder="Add Your Catalog Name"
                clearButtonMode="while-editing"
                onChangeText={(text) => setCatalogName(text)}
                enablesReturnKeyAutomatically
                autoCorrect
                value={catalogName}
              />
            </View>
            <AppText
              textStyle={{
                color: COLORS.GRAY,
                marginTop: 20,
                fontWeight: '600',
              }}>
              Choose Your Category
            </AppText>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Picker
                itemStyle={{color: COLORS.GRAY}}
                style={{height: 180, width: WIDTH}}
                selectedValue={selectedItem}
                onValueChange={(index) => setSelectedItem(index)}
                lineColor={COLORS.WHITE}>
                {categories.map((category, i) => {
                  return (
                    <Picker.Item
                      color={COLORS.WHITE}
                      label={category.title}
                      value={i}
                      key={i}
                    />
                  );
                })}
              </Picker>
            </View>
            <View style={{flex: 1}}>
              <AppText textStyle={{color: COLORS.GRAY, fontSize: 16}}>
                Choose Catalogue Type
              </AppText>
              <View style={styles.catalogTypeContainer}>
                <CheckBox
                  center
                  title="Public catalogue"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={radio1}
                  containerStyle={{
                    backgroundColor: COLORS.BACKGOUND,
                    borderWidth: 0,
                  }}
                  textStyle={{color: COLORS.WHITE}}
                  onPress={() => {
                    setRadio1(true);
                    setRadio2(false);
                  }}
                  checkedColor={COLORS.PRIMARY}
                  Component={TouchableWithoutFeedback}
                  uncheckedColor={COLORS.BORDER_COLOR}
                />
                <CheckBox
                  center
                  title="Private catalogue"
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checked={radio2}
                  containerStyle={{
                    backgroundColor: COLORS.BACKGOUND,
                    borderWidth: 0,
                    paddingVertical: 10,
                  }}
                  textStyle={{color: COLORS.WHITE}}
                  onPress={() => {
                    setRadio2(true);
                    setRadio1(false);
                  }}
                  checkedColor={COLORS.PRIMARY}
                  uncheckedColor={COLORS.BORDER_COLOR}
                  Component={TouchableWithoutFeedback}
                />
              </View>
              <View style={styles.termsConditionContainer}>
                <CheckBox
                  checkedColor={COLORS.PRIMARY}
                  title="You will not be able to share  the catalogues which are marked Enabled for resellers."
                  containerStyle={{
                    backgroundColor: COLORS.BACKGOUND,
                    borderWidth: 0,
                  }}
                  textStyle={styles.termsConditionText}
                  Component={TouchableWithoutFeedback}
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checked={termsAccepted}
                  onPress={() => setTermsAccepted(!termsAccepted)}
                  iconType="material-community"
                />
                <AppButton
                  title="Add Product"
                  leftIcon="add-circle"
                  leftIconSize={20}
                  leftIconStyle={{marginHorizontal: 7}}
                  leftIconColor={COLORS.WHITE}
                  onPress={() => navigation.navigate('AddProducts')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateCatalog;
