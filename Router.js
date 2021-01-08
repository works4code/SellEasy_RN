import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux'
// helpers
import COLORS from './src/helpers/colors';
// screens
import OnBoarding from './src/screens/OnBoarding';
import Login from './src/screens/Login';
import PhoneVerification from './src/screens/PhoneVerification';
import HomeScreen from './src/screens/HomeScreen';
import CreateCatalog from './src/screens/CreateCatalog';
import AddProducts from './src/screens/AddProducts';
import Profile from './src/screens/Profile';
import EditProfile from './src/screens/EditProfile';
import Network from './src/screens/Network';
// Inventory Subscreens
import BasicInfo from './src/screens/sub-screen/BasicInfo';
import Inventory from './src/screens/sub-screen/Inventory';
import Other from './src/screens/sub-screen/Other';
import Photos from './src/screens/sub-screen/Photos';
import Variants from './src/screens/sub-screen/Variants';
// components
import AppText from './src/components/AppText';
// navigation
import DrawerContent from './src/screens/navigation/DrawerContent'

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const Router = ({navigation, style}) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="onBoarding" component={OnBoarding} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="phoneVerification" component={PhoneVerification} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CreateCatalog" component={CreateCatalog} />
        <Stack.Screen name="AddProducts" component={AddProducts} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Network" component={Network} />
      </Stack.Navigator>
    </Animated.View>
  );
};

export const topTabs = () => {
  return (
    <TopTab.Navigator
      sceneContainerStyle={{backgroundColor: COLORS.BACKGOUND}}
      tabBarOptions={{
        contentContainerStyle: {backgroundColor: COLORS.SECONDARY},
        activeTintColor: COLORS.WHITE,
        inactiveTintColor: COLORS.BORDER_COLOR,
        labelStyle: {
          fontSize: 12.5,
          fontWeight: '600',
          textAlign: 'center',
        },
        scrollEnabled: true,
        bounces: false,
        tabStyle: {width: 120},
      }}>
      <TopTab.Screen name="Basic Info" component={BasicInfo} />
      <TopTab.Screen name="Variants" component={Variants} />
      <TopTab.Screen name="Inventory" component={Inventory} />
      <TopTab.Screen name="Other" component={Other} />
      <TopTab.Screen name="Photos" component={Photos} />
    </TopTab.Navigator>
  );
};


const Drawernavigation = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 0.25, 1],
    outputRange: [1, 0.9, 0.7],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 0.1, 0.2, 0.5, 0.7, 1],
    outputRange: [0, 5, 7, 10, 15, 20],
  });

  const animatedStyle = {borderRadius, transform: [{scale}]};

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{flex: 1}}
        drawerContentOptions={{
          activeBackgroundColor: COLORS.GRAY,
          activeTintColor: COLORS.WHITE,
          inactiveTintColor: COLORS.GRAY,
          inactiveBackgroundColor: COLORS.CARD_BACKGROUND,
        }}
        sceneContainerStyle={{backgroundColor: COLORS.DRAWER_BACKGROUND}}
        drawerContent={(props) => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Router">
          {(props) => <Router {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: COLORS.WHITE,
    shadowOffset: {
      width: -8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
    overflow: 'scroll',
    borderWidth: 0,
  },
  drawerStyles: {
    flex: 1,
    width: '70%',
    backgroundColor: COLORS.DRAWER_BACKGROUND,
    borderWidth: 0,
  },
  drawerItem: {alignItems: 'flex-start', marginVertical: 0},
  drawerLabel: {color: 'white', marginLeft: -16},
});

export default Drawernavigation;
