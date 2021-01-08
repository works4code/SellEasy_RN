import React from 'react';
import { Pressable, View, FlatList } from 'react-native';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import Animated from 'react-native-reanimated';
import {DrawerContentScrollView} from '@react-navigation/drawer'
// components
import AppText from '../../components/AppText';
// helers
import COLORS from '../../helpers/colors';

const DATA = [
  {
    id: 1,
    name: 'Request Demo',
    icon: 'ondemand-video',
    screen: ''
  },
  {
    id: 2,
    name: 'Network',
    icon: 'supervisor-account',
    screen: 'Network'
  },
  {
    id: 3,
    name: 'Analytics',
    icon: 'equalizer',
    screen: ''
  },
  {
    id: 4,
    name: 'Messages',
    icon: 'chat-bubble-outline',
    screen: ''
  },
  {
    id: 5,
    name: 'Payment Dashboard',
    icon: 'account-balance-wallet',
    screen: ''
  },
  {
    id: 6,
    name: 'Profile',
    icon: 'person-outline',
    screen: ''
  },
  {
    id: 7,
    name: 'Settings',
    icon: 'settings',
    screen: ''
  },
  {
    id: 8,
    name: 'Privacy & terms',
    icon: 'lock-outline',
    screen: ''
  },
  {
    id: 9,
    name: 'Get Support',
    icon: 'headset-mic',
    screen: ''
  },
];

const DrawerContent = (props) => {
  console.log('drawer content props', props);

  const translateX = Animated.interpolate(props.progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const renderItem = ({item}) => {
    return (
      <Pressable
        onPress={() => props.navigation.navigate(`${item.screen}`)}
        style={({pressed}) => [{
          padding: 15,
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'center',
        },{backgroundColor: pressed ? COLORS.HOMESCREEN_CARD : COLORS.DRAWER_BACKGROUND}]}>
        <View>
          <MIcons name={item.icon} color={COLORS.GRAY} size={25} />
        </View>
        <View style={{marginLeft: 15}}>
          <AppText textStyle={{color: COLORS.GRAY, fontWeight: '600'}}>
            {item.name}
          </AppText>
        </View>
      </Pressable>
    );
  };

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{flex: 1}}>
      <Animated.View
        style={{flex: 1, paddingHorizontal: 7, transform: [{translateX}]}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              backgroundColor: 'grey',
              marginRight: 10,
            }}></View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <AppText>Torest Eco Garden</AppText>
              <MIcons
                name="verified"
                color={COLORS.PRIMARY}
                size={20}
                style={{marginLeft: 5}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <AppText textStyle={{color: COLORS.GRAY, fontSize: 14}}>
                Premium
              </AppText>
              <AppText
                textStyle={{
                  marginLeft: 7,
                  color: COLORS.PRIMARY,
                  fontSize: 14,
                }}>
                Upgrade
              </AppText>
            </View>
          </View>
        </View>
        <View style={{marginTop: 20}}></View>
        <FlatList scrollEnabled={false} data={DATA} renderItem={renderItem} />
        <Pressable
          onPress={() => props.navigation.navigate('login')}
          style={{
            flex: 1,
            padding: 15,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
          }}>
          <View>
            <MIcons name="power-settings-new" color={COLORS.RED} size={25} />
          </View>
          <View style={{marginLeft: 15}}>
            <AppText textStyle={{color: COLORS.RED}}>Logout</AppText>
          </View>
        </Pressable>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;