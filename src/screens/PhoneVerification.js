import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  Platform,
  StatusBar,
} from 'react-native';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {TextField} from 'react-native-material-textfield';
import Menu, {MenuItem} from 'react-native-material-menu';
import axios from 'axios';
// components
import AppBackground from '../components/AppBackground';
import AppText from '../components/AppText';
// helpers
import COLORS from '../helpers/colors';
import {
  WIDTH,
  BASE_URl,
  GET_CATEGORY,
  TOKEN,
  HEIGHT,
} from '../helpers/constants';
// logo
import LOGO from '../images/Group27.png';
// styles
import styles from './styles/PhoneVerification.styles';

const LABELS = [
  'Phone Verification',
  'Personal info',
  'Select Products',
  'Choose type',
];

const CUSTOMSTYLES = {
  // indicator
  stepIndicatorSize: 40,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  stepIndicatorFinishedColor: COLORS.PRIMARY,
  stepIndicatorCurrentColor: COLORS.PRIMARY,
  stepIndicatorLabelCurrentColor: COLORS.WHITE,
  stepIndicatorUnFinishedColor: '#383F49',
  // stroke
  stepStrokeUnFinishedColor: COLORS.SECONDARY,
  separatorStrokeWidth: 2,
  separatorStrokeUnfinishedWidth: 1,
  separatorStrokeFinishedWidth: 2,
  // separator
  separatorFinishedColor: COLORS.PRIMARY,
  separatorUnFinishedColor: COLORS.SECONDARY,
  currentStepStrokeWidth: 0,
  // label
  labelAlign: 'center',
  currentStepLabelColor: COLORS.WHITE,
  stepIndicatorLabelFinishedColor: COLORS.WHITE,
  stepIndicatorLabelCurrentColor: COLORS.WHITE,
  stepIndicatorLabelUnFinishedColor: COLORS.SECONDARY,
  // labelColor: COLORS.WHITE,
  labelFontFamily: 'NunitoSans-Bold',
};

const userType = [
  {
    id: '1',
    title: 'Wholesaler / Manufacturer',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: 'store',
    isSelected: false,
  },
  {
    id: '2',
    title: 'Reseller',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    icon: 'device-hub',
    isSelected: false,
  },
];

class PhoneVerification extends Component {
  constructor(props) {
    super(props);

    this.numberInput = createRef();
    this.phoneInput = createRef();
    this.otpInput1 = createRef();
    this.otpInput2 = createRef();
    this.otpInput3 = createRef();
    this.otpInput4 = createRef();
    this.menuRef = createRef();
    this.menuRef1 = createRef();
    this.menuRef2 = createRef();
    this.menuRef3 = createRef();
    this.textInputRef1 = createRef();
    this.textInputRef2 = createRef();
    this.textInputRef3 = createRef();
    this.textInputRef4 = createRef();
    this.searchInput = createRef();

    this.state = {
      currentPosition: 0,
      selectedCountry: 'IN',
      renderVerifyOtp: false,
      otpText1: '',
      otpText2: '',
      otpText3: '',
      otpText4: '',
      isDropdownActive: false,
      productsData: [],
      searchText: '',
      userTypes: userType,
      filteredArr: [],
      selectedUserType: 0,
    };
  }

  async componentDidMount() {
    const temparr = [];
    try {
      const {data} = await axios.get(BASE_URl + GET_CATEGORY, {
        headers: {
          Authorization: TOKEN,
        },
      });
      data.Data.map((item) => {
        temparr.push({...item, isSelected: false});
      });
      this.setState({productsData: temparr});
      this.setState({filteredArr: temparr});
    } catch (error) {
      console.log('error in getting category', error);
    }
  }

  // /*
  // .########..########.##....##.########..########.########.
  // .##.....##.##.......###...##.##.....##.##.......##.....##
  // .##.....##.##.......####..##.##.....##.##.......##.....##
  // .########..######...##.##.##.##.....##.######...########.
  // .##...##...##.......##..####.##.....##.##.......##...##..
  // .##....##..##.......##...###.##.....##.##.......##....##.
  // .##.....##.########.##....##.########..########.##.....##
  // */

  iconConfig = (name, stepStatus, position) => {
    const {currentPosition} = this.state;

    if (stepStatus === 'finished') {
      return <Icon name={name} size={20} color={COLORS.WHITE} />;
    } else if (stepStatus === 'current') {
      return <Icon name={name} size={20} color={COLORS.WHITE} />;
    } else if (
      stepStatus === 'unfinished' &&
      position - currentPosition === 1
    ) {
      return <Icon name={name} size={20} color={COLORS.GRAY} />;
    } else if (
      position - currentPosition !== 0 &&
      position - currentPosition !== 1
    ) {
      return <Icon name={name} size={20} color="#4A535F" />;
    }
  };

  renderStepIndicator = ({position, stepStatus}) => {
    switch (position) {
      case 0: {
        return this.iconConfig('cellphone-iphone', stepStatus, position);
        break;
      }
      case 1: {
        return this.iconConfig('account-outline', stepStatus, position);
        break;
      }
      case 2: {
        return this.iconConfig('shopping-outline', stepStatus, position);
        break;
      }
      case 3: {
        return this.iconConfig('bag-personal-outline', stepStatus, position);
        break;
      }
    }
  };

  renderLabel = ({position, stepStatus, label, cPosition}) => {
    if (stepStatus === 'current') {
      return <Text style={styles.labelStyle}>{label}</Text>;
    } else if (stepStatus === 'finished') {
      return <Text style={styles.labelStyle}>{label}</Text>;
    } else if (position - cPosition !== 0 && position - cPosition !== 1) {
      return (
        <Text style={[styles.labelStyle, {color: '#4A535F'}]}>{label}</Text>
      );
    } else if (position - cPosition === 1) {
      return <Text style={{color: COLORS.GRAY}}>{label}</Text>;
    }
  };

  // /*
  // .########..##.....##..#######..##....##.########.##....##.##.....##.##.....##.########..########.########.
  // .##.....##.##.....##.##.....##.###...##.##.......###...##.##.....##.###...###.##.....##.##.......##.....##
  // .##.....##.##.....##.##.....##.####..##.##.......####..##.##.....##.####.####.##.....##.##.......##.....##
  // .########..#########.##.....##.##.##.##.######...##.##.##.##.....##.##.###.##.########..######...########.
  // .##........##.....##.##.....##.##..####.##.......##..####.##.....##.##.....##.##.....##.##.......##...##..
  // .##........##.....##.##.....##.##...###.##.......##...###.##.....##.##.....##.##.....##.##.......##....##.
  // .##........##.....##..#######..##....##.########.##....##..#######..##.....##.########..########.##.....##
  // */

  renderPhoneNumberView = () => {
    const {selectedCountry} = this.state;

    return (
      <>
        <AppText textStyle={[styles.title, {fontSize: 20}]}>
          Enter Your Phone Number
        </AppText>
        <AppText textStyle={styles.pvSubtitle}>
          Please enter your phone number to receive a verification code to log
          in{' '}
        </AppText>
        <View style={styles.numberInputContainer}>
          <View style={styles.pvNuberInputContainer}>
            <CountryPicker
              theme={DARK_THEME}
              withFlagButton
              withFilter
              withCallingCodeButton
              countryCode={selectedCountry}
              withCallingCode
              withEmoji
              onSelect={(code) => {
                this.setState({selectedCountry: code.cca2});
              }}
            />
            <Icon
              name="chevron-down"
              size={20}
              color={COLORS.BORDER_COLOR}
              style={{marginLeft: 5}}
            />
          </View>
          <TextInput
            style={styles.numberInput}
            keyboardType="decimal-pad"
            textContentType="telephoneNumber"
            ref={this.numberInput}
            maxLength={10}
            autoCompleteType="tel"
            autoFocus
            enablesReturnKeyAutomatically
          />
        </View>
      </>
    );
  };

  // /*
  // ..#######..########.########.
  // .##.....##....##....##.....##
  // .##.....##....##....##.....##
  // .##.....##....##....########.
  // .##.....##....##....##.......
  // .##.....##....##....##.......
  // ..#######.....##....##.......
  // */

  resendOtp = () => {
    console.log('resendOtp');

    // function for resend OTP
  };

  renderVerifyOtpView = () => {
    return (
      <>
        <AppText textStyle={[styles.title, {fontSize: 20}]}>
          OTP Verification
        </AppText>
        <AppText textStyle={styles.voSubtitle}>
          Please enter the 4 digit verification code we send to you...
        </AppText>
        <View style={styles.otpInputContainer}>
          <TouchableWithoutFeedback style={styles.otpInput}>
            <TextInput
              placeholder="*"
              style={{color: COLORS.WHITE, fontSize: 18}}
              keyboardType="numeric"
              ref={this.otpInput1}
              onChangeText={(text) => {
                this.setState({otpText1: text});
                this.otpInput2.current.focus();
              }}
              maxLength={1}
              autoFocus
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.otpInput}>
            <TextInput
              placeholder="*"
              style={{color: COLORS.WHITE, fontSize: 18}}
              keyboardType="numeric"
              ref={this.otpInput2}
              onChangeText={(text) => {
                this.setState({otpText2: text});
                this.otpInput3.current.focus();
              }}
              // editable={otpText1 ? true : false}
              maxLength={1}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.otpInput}>
            <TextInput
              placeholder="*"
              style={{color: COLORS.WHITE, fontSize: 18}}
              keyboardType="numeric"
              ref={this.otpInput3}
              onChangeText={(text) => {
                // setOtpText3(text);
                this.setState({otpText3: text});
                this.otpInput4.current.focus();
              }}
              // editable={otpText2 ? true : false}
              maxLength={1}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.otpInput}>
            <TextInput
              placeholder="*"
              style={{color: COLORS.WHITE, fontSize: 18}}
              keyboardType="numeric"
              ref={this.otpInput4}
              onChangeText={(text) => {
                // setOtpText4(text);
                this.setState({otpText4: text});
              }}
              // editable={otpText3 ? true : false}
              maxLength={1}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: COLORS.GRAY,
              marginTop: 10,
            }}>
            Didn’t recieve code?{' '}
          </Text>
          <TouchableWithoutFeedback onPress={() => this.resendOtp()}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: COLORS.PRIMARY,
                marginTop: 10,
              }}>
              Resend
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  };

  // /*
  // .########..##....##.##.....##.########.########..####.########.##....##
  // .##.....##.###...##.##.....##.##.......##.....##..##..##........##..##.
  // .##.....##.####..##.##.....##.##.......##.....##..##..##.........####..
  // .########..##.##.##.##.....##.######...########...##..######......##...
  // .##........##..####..##...##..##.......##...##....##..##..........##...
  // .##........##...###...##.##...##.......##....##...##..##..........##...
  // .##........##....##....###....########.##.....##.####.##..........##...
  // */

  renderPhoneVerification = () => {
    const {currentPosition, renderVerifyOtp, selectedCountry} = this.state;

    return (
      <View style={styles.secondaryView}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={LOGO}
            style={{
              resizeMode: 'contain',
              height: WIDTH / 4,
              width: WIDTH / 4.5,
            }}
          />
          <View style={{flexDirection: 'row'}}>
            {/* <Image source={TITLE} /> */}
            <AppText textStyle={styles.title}>Welcome to </AppText>
            <AppText textStyle={[styles.title, {color: COLORS.PRIMARY}]}>
              SellEasy
            </AppText>
          </View>
        </View>
        <View style={styles.highlighterView} />
        <View style={styles.otpView}>
          {renderVerifyOtp === false
            ? this.renderPhoneNumberView()
            : this.renderVerifyOtpView()}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            padding: 12,
          }}>
          <TouchableOpacity
            onPress={() => {
              if (renderVerifyOtp) {
                // setCurrentPostion(1);
                this.setState({currentPosition: 1});
                // setRenderVerifyOtp(false);
                this.setState({renderVerifyOtp: false});
              } else {
                // setRenderVeri/fyOtp(true);
                this.setState({renderVerifyOtp: true});
              }
            }}>
            <Icon
              name="chevron-right"
              size={35}
              color={COLORS.PRIMARY}
              style={styles.nextBtn}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // /*
  // .########..########.########...######...#######..##....##....###....##.......####.##....##.########..#######.
  // .##.....##.##.......##.....##.##....##.##.....##.###...##...##.##...##........##..###...##.##.......##.....##
  // .##.....##.##.......##.....##.##.......##.....##.####..##..##...##..##........##..####..##.##.......##.....##
  // .########..######...########...######..##.....##.##.##.##.##.....##.##........##..##.##.##.######...##.....##
  // .##........##.......##...##.........##.##.....##.##..####.#########.##........##..##..####.##.......##.....##
  // .##........##.......##....##..##....##.##.....##.##...###.##.....##.##........##..##...###.##.......##.....##
  // .##........########.##.....##..######...#######..##....##.##.....##.########.####.##....##.##........#######.
  // */

  renderPersonalInfo = () => {
    const {selectedCountry, isDropdownActive} = this.state;

    return (
      <View style={{marginTop: 50, paddingHorizontal: 15, flex: 1}}>
        <TextField
          useNativeDriver
          label="Brand or company name"
          labelTextStyle={{fontSize: 12, fontWeight: '600', color: COLORS.GRAY}}
          textColor={COLORS.WHITE}
          baseColor={COLORS.GRAY}
          animationDuration={250}
          tintColor={COLORS.PRIMARY}
          renderRightAccessory={() => (
            <Icon name="information" style={{color: COLORS.GRAY}} size={20} />
          )}
          ref={this.textInputRef1}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <TextField
              useNativeDriver
              label="First Name"
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
              ref={this.textInputRef2}
            />
          </View>
          <View>
            <TextField
              useNativeDriver
              label="Last Name"
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
              ref={this.textInputRef3}
            />
          </View>
        </View>
        <View style={{marginTop: 10}}>
          <Menu
            style={{backgroundColor: COLORS.GRAY, width: '90%', marginTop: 0}}
            ref={this.menuRef}
            button={
              <TouchableWithoutFeedback
                onPress={() => {
                  // setIsDropdownActive(true);
                  this.setState({isDropdownActive: true});
                  this.menuRef.current.show();
                }}
                style={{
                  borderBottomWidth: 1,
                  borderColor: !isDropdownActive ? COLORS.GRAY : COLORS.PRIMARY,
                  paddingVertical: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  onPress={() => {
                    this.menuRef.current.show();
                  }}
                  style={{color: COLORS.GRAY, fontSize: 16, fontWeight: '600'}}>
                  Selected currency
                </Text>
                <Icon name="chevron-down" size={25} color={COLORS.GRAY} />
              </TouchableWithoutFeedback>
            }>
            <MenuItem onPress={() => this.menuRef.current.hide()}>
              First item
            </MenuItem>
            <MenuItem onPress={() => this.menuRef.current.hide()}>
              Second item
            </MenuItem>
            <MenuItem onPress={() => this.menuRef.current.hide()}>
              Third item
            </MenuItem>
          </Menu>
        </View>
        <View style={[styles.numberInputContainer, {marginTop: 10}]}>
          <View style={{width: WIDTH / 2.5}}>
            <Menu
              style={{backgroundColor: COLORS.GRAY, width: '90%', marginTop: 0}}
              // ref={}
              button={
                <TouchableWithoutFeedback
                  onPress={() => {
                    // setIsDropdownActive(true);
                    this.setState({isDropdownActive: true});
                    // this.menuRef.show();
                  }}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: !isDropdownActive
                      ? COLORS.GRAY
                      : COLORS.PRIMARY,
                    paddingVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    onPress={() => {
                      // this.menuRef.show();
                    }}
                    style={{
                      color: COLORS.GRAY,
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    City
                  </Text>
                  <Icon name="chevron-down" size={25} color={COLORS.GRAY} />
                </TouchableWithoutFeedback>
              }>
              <MenuItem
              // onPress={() => this.menuRef.hide()}
              >
                First item
              </MenuItem>
              <MenuItem
              // onPress={() => this.menuRef.hide()}
              >
                Second item
              </MenuItem>
              <MenuItem
              // onPress={() => this.menuRef.hide()}
              >
                Third item
              </MenuItem>
            </Menu>
          </View>
          <View style={{width: WIDTH / 2.5}}>
            <Menu
              style={{backgroundColor: COLORS.GRAY, width: '90%', marginTop: 0}}
              // ref={(ref) => (menuRef = ref)}
              button={
                <TouchableWithoutFeedback
                  onPress={() => {
                    // setIsDropdownActive(true);
                    this.setState({isDropdownActive: true});
                    // this.menuRef.current.show();
                  }}
                  style={{
                    borderBottomWidth: 1,
                    borderColor: !isDropdownActive
                      ? COLORS.GRAY
                      : COLORS.PRIMARY,
                    paddingVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    onPress={() => {
                      // this.menuRef.current.show();
                    }}
                    style={{
                      color: COLORS.GRAY,
                      fontSize: 16,
                      fontWeight: '600',
                    }}>
                    State/Province
                  </Text>
                  <Icon name="chevron-down" size={25} color={COLORS.GRAY} />
                </TouchableWithoutFeedback>
              }>
              <MenuItem
              // onPress={() => this.menuRef.hide()}
              >
                First item
              </MenuItem>
              <MenuItem
              // onPress={() => this.menuRef.hide()}
              >
                Second item
              </MenuItem>
              <MenuItem
              // onPress={() => this.menuRef.hide()}
              >
                Third item
              </MenuItem>
            </Menu>
          </View>
          {/* <View style={styles.piPhoneInput}>
            <CountryPicker
              theme={DARK_THEME}
              withFlagButton
              withFilter
              withCallingCodeButton
              countryCode={selectedCountry}
              withCallingCode
              withEmoji
              onSelect={(code) => {
                // setSelectedCountry(code.cca2);
                this.setState({selectedCountry: code.cca2});
              }}
            />
            <Icon
              name="chevron-down"
              size={20}
              color={COLORS.BORDER_COLOR}
              style={{marginLeft: 5}}
            />
          </View>
          <TextInput
            style={styles.numberInput}
            keyboardType="decimal-pad"
            textContentType="telephoneNumber"
            ref={this.phoneInput}
            maxLength={10}
            autoCompleteType="tel"
            enablesReturnKeyAutomatically
          /> */}
        </View>

        <TextField
          useNativeDriver
          label="Tax ID (eg. GST,VAT)"
          labelTextStyle={{fontSize: 12, fontWeight: '600', color: COLORS.GRAY}}
          textColor={COLORS.WHITE}
          baseColor={COLORS.GRAY}
          animationDuration={250}
          tintColor={COLORS.PRIMARY}
          renderRightAccessory={() => (
            <Icon name="information" style={{color: COLORS.GRAY}} size={20} />
          )}
          ref={this.textInputRef4}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            padding: 12,
          }}>
          <TouchableOpacity onPress={() => this.setState({currentPosition: 2})}>
            <Icon name="chevron-right" color={COLORS.PRIMARY} size={35} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // /*
  // ..######..########.##.......########..######..########.########..########...#######..########..##.....##..######..########..######.
  // .##....##.##.......##.......##.......##....##....##....##.....##.##.....##.##.....##.##.....##.##.....##.##....##....##....##....##
  // .##.......##.......##.......##.......##..........##....##.....##.##.....##.##.....##.##.....##.##.....##.##..........##....##......
  // ..######..######...##.......######...##..........##....########..########..##.....##.##.....##.##.....##.##..........##.....######.
  // .......##.##.......##.......##.......##..........##....##........##...##...##.....##.##.....##.##.....##.##..........##..........##
  // .##....##.##.......##.......##.......##....##....##....##........##....##..##.....##.##.....##.##.....##.##....##....##....##....##
  // ..######..########.########.########..######.....##....##........##.....##..#######..########...#######...######.....##.....######.
  // */

  renderSelectProducts = () => {
    const selectedCategories = [];
    const {productsData} = this.state;

    const selectedItem = (item, currentIndex) => {
      let tempProducts = productsData;

      tempProducts.map((product, index) => {
        if (currentIndex === index) {
          product.isSelected = !item.isSelected;
        }
        this.setState({productsData: tempProducts});
      });
    };

    const searchproducts = (text) => {
      this.setState({searchText: text});
      const filteredArray = this.state.filteredArr.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase()),
      );
      this.setState({productsData: filteredArray});
    };

    const renderproducts = ({item, index}) => {
      if (item.isSelected) {
        selectedCategories.push(item);
      }
      return (
        <TouchableOpacity
          style={{
            backgroundColor: item.isSelected
              ? COLORS.SECONDARY
              : COLORS.BACKGOUND,
            padding: 10,
          }}
          onPress={() => selectedItem(item, index)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: item.isSelected
                ? COLORS.SECONDARY
                : COLORS.BACKGOUND,
            }}>
            <View
              style={{
                height: 46,
                width: 46,
                borderRadius: 23,
                backgroundColor: item.isSelected
                  ? COLORS.PRIMARY
                  : COLORS.SECONDARY,
                marginVertical: 7,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MIcons
                name={item.icon}
                color={item.isSelected ? COLORS.WHITE : COLORS.UNFINISHED_ICON}
                size={24}
              />
            </View>
            <View style={{marginLeft: 10, width: '70%'}}>
              <AppText>{item.name}</AppText>
              <View style={{paddingRight: 20}}>
                <AppText textStyle={styles.spProductDesc}>
                  {item.description}
                </AppText>
              </View>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              {item.isSelected && (
                <MIcons name="done" color={COLORS.PRIMARY} size={20} />
              )}
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{flex: 1}}>
        <View style={styles.searchInputContainer}>
          <TouchableWithoutFeedback onPress={() => searchInput.focus()}>
            <Ionicons name="search" color={COLORS.GRAY} size={24} />
          </TouchableWithoutFeedback>
          <TextInput
            placeholder="Search Product"
            placeholderTextColor={COLORS.GRAY}
            style={{marginLeft: 10, color: COLORS.WHITE, flex: 1}}
            ref={this.searchInput}
            onChangeText={(text) => {
              console.log('text changed');
              searchproducts(text.trim());
            }}
          />
        </View>
        <FlatList
          data={this.state.productsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderproducts}
          indicatorStyle="black"
          ItemSeparatorComponent={() => (
            <View
              style={{borderWidth: 0.5, borderColor: COLORS.BORDER_COLOR}}
            />
          )}
          style={{backgroundColor: COLORS.BACKGOUND, height: HEIGHT / 1.7}}
          scrollEnabled
          overScrollMode="never"
          extraData={this.state.filteredArr}
        />
        <View
          style={{
            flex: 1,
            padding: 12,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginRight: 15}}
            onPress={() => this.setState({currentPosition: 3})}>
            <Icon name="chevron-right" color={COLORS.PRIMARY} size={35} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // /*
  // ..######..##.....##..#######...#######...######..########.########.##....##.########..########
  // .##....##.##.....##.##.....##.##.....##.##....##.##..........##.....##..##..##.....##.##......
  // .##.......##.....##.##.....##.##.....##.##.......##..........##......####...##.....##.##......
  // .##.......#########.##.....##.##.....##..######..######......##.......##....########..######..
  // .##.......##.....##.##.....##.##.....##.......##.##..........##.......##....##........##......
  // .##....##.##.....##.##.....##.##.....##.##....##.##..........##.......##....##........##......
  // ..######..##.....##..#######...#######...######..########....##.......##....##........########
  // */

  renderChooseType = () => {
    const {userTypes} = this.state;

    const selectedType = (item, currentIndex) => {
      const tempType = userTypes;

      tempType.map((type, index) => {
        if (currentIndex === index) {
          type.isSelected = !item.isSelected;
        } else {
          type.isSelected = false;
        }
        this.setState({userTypes: tempType});
      });
    };

    const renderItem = ({item, index}) => {
      return (
        <TouchableOpacity
          onPress={() => selectedType(item, index)}
          style={{
            height: WIDTH / 2,
            width: WIDTH - 76,
            marginVertical: 20,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: item.isSelected
              ? COLORS.SELECTED_CARD_BACKGROUND
              : COLORS.CARD_BACKGROUND,
            paddingHorizontal: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 72,
                width: 72,
                borderRadius: 36,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.SECONDARY,
                zIndex: -1,
              }}>
              <MIcons
                name={item.icon}
                size={30}
                color={item.isSelected ? COLORS.WHITE : COLORS.GRAY}
                style={{fontWeight: 'bold'}}
              />
            </View>
            {item.isSelected && (
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  backgroundColor: COLORS.PRIMARY,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 3,
                  borderColor: COLORS.SELECTED_CARD_BACKGROUND,
                  zIndex: 1,
                  position: 'absolute',
                  right: -10,
                  top: -2,
                }}>
                <MIcons name="done" size={13} color={COLORS.WHITE} />
              </View>
            )}
          </View>
          <AppText
            textStyle={{
              fontSize: 18,
              color: item.isSelected ? COLORS.WHITE : COLORS.GRAY,
              marginTop: 7,
            }}>
            {item.title}
          </AppText>
          <AppText
            textStyle={{
              fontSize: 14,
              color: COLORS.GRAY,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            {item.desc}
          </AppText>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{paddingHorizontal: 15, flex: 1}}>
        <View style={{marginTop: 15, flex: 1}}>
          <AppText textStyle={{fontSize: 20, fontWeight: '800'}}>
            Choose who Are you ?
          </AppText>
          <AppText
            textStyle={{
              color: COLORS.GRAY,
              marginTop: 7,
              fontSize: 16,
              fontWeight: '600',
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </AppText>
          <View style={{flex: 1}}>
            <FlatList
              data={userTypes}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              scrollEnabled={false}
              style={{flex: 1}}
              contentContainerStyle={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
            <View
              style={{
                padding: 12,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.replace('HomeScreen')}>
                <Icon name="chevron-right" color={COLORS.PRIMARY} size={35} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  // /*
  // .##.....##....###....####.##....##.########..########.##....##.########..########.########.
  // .###...###...##.##....##..###...##.##.....##.##.......###...##.##.....##.##.......##.....##
  // .####.####..##...##...##..####..##.##.....##.##.......####..##.##.....##.##.......##.....##
  // .##.###.##.##.....##..##..##.##.##.########..######...##.##.##.##.....##.######...########.
  // .##.....##.#########..##..##..####.##...##...##.......##..####.##.....##.##.......##...##..
  // .##.....##.##.....##..##..##...###.##....##..##.......##...###.##.....##.##.......##....##.
  // .##.....##.##.....##.####.##....##.##.....##.########.##....##.########..########.##.....##
  // */
  render() {
    // console.log('wdith render', WIDTH);
    const {currentPosition} = this.state;
    return (
      <AppBackground style={styles.subContainer}>
        <StatusBar translucent backgroundColor="transparent" />
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}>
          {currentPosition > 0 ? (
            <TouchableWithoutFeedback
              onPress={() =>
                this.setState({currentPosition: this.state.currentPosition - 1})
              }
              style={{paddingHorizontal: 20, marginBottom: 20}}>
              <Icon name="chevron-left" color={COLORS.GRAY} size={25} />
            </TouchableWithoutFeedback>
          ) : (
            <View style={{height: 45}} />
          )}
          <StepIndicator
            currentPosition={currentPosition}
            direction="horizontal"
            stepCount={4}
            labels={LABELS}
            renderStepIndicator={this.renderStepIndicator}
            customStyles={CUSTOMSTYLES}
            renderLabel={this.renderLabel}
          />
          {currentPosition === 0
            ? this.renderPhoneVerification()
            : currentPosition === 1
            ? this.renderPersonalInfo()
            : currentPosition === 2
            ? this.renderSelectProducts()
            : this.renderChooseType()}
        </SafeAreaView>
      </AppBackground>
    );
  }
}

export default PhoneVerification;
