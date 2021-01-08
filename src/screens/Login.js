import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableHighlight,
  Platform,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import {connect} from 'react-redux'
// styles
import styles from './styles/Login.styles';
// helpers
import COLORS from '../helpers/colors';
import {HEIGHT, WIDTH} from '../helpers/constants';
// icon
import LOGO from '../images/Group27.png';
// components
import AppText from '../components/AppText';
import AppAuthButton from '../components/AppAuthButton';
// redux
import {setUser} from '../redux/actions'
import { State } from 'react-native-gesture-handler';

const Login = (props) => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState()
  const [user, setUser] = useState({})

  console.log("Login screen props", props)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '141963617040-ia9aahuhqr6e6gk2fbbe418uomof26ds.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      iosClientId: '141963617040-1o00149n6d806cmmo7sc4cpcc0lr8gq7.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo)
      setUser(userInfo)
      props.setUser(userInfo)
      navigation.navigate('phoneVerification')
      // setUser(userInfo)
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened',error);
      }
    }
  };
  
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log('signedin', isSignedIn)
    if (!!isSignedIn) {
      getCurrentUserInfo()
    } else {
      console.log('Please Login')
    }
  };

  const   getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      console.log('current user ===', userInfo )
      setUser(userInfo);
      // this.setState({user: userInfo})
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser({});
      // this.setState({user: {}})
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.BACKGOUND,
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <StatusBar translucent backgroundColor={COLORS.SECONDARY} />
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
              style={{resizeMode: 'contain', height: 110, width: 110}}
            />
          </View>
          <View style={styles.txtContainer}>
            <AppText textStyle={styles.txt}>Welcome to </AppText>
            <AppText textStyle={[styles.txt, {color: COLORS.PRIMARY}]}>
              SellEasy
            </AppText>
          </View>
          <View
            style={{
              height: 20,
              marginTop: -20,
              borderRadius: 10,
              backgroundColor: '#A4C2BF',
              width: 100,
              opacity: 0.15,
              marginLeft: 150,
            }}
          />
          <View style={styles.descContainer}>
            <AppText textStyle={styles.desc}>
              Sign up with a social account or enter your information below.
            </AppText>
          </View>
        </View>
      </View>
      {/*  */}
      <View
        style={{marginTop: 40, alignItems: 'center', paddingHorizontal: 20}}>
        <AppAuthButton
          title="Continue with Google"
          icon="ios-logo-google"
          iconBgColor={COLORS.GOOGLE_LOGO_BG}
          onPress={() => signIn()}
        />
        <AppAuthButton
          title="Continue with Facebook"
          icon="logo-facebook"
          iconBgColor={COLORS.FB_LOGO_BG}
          onPress={() => console.log('Facebook login')}
          style={{backgroundColor: COLORS.FB_BTN}}
        />
        <AppAuthButton
          title="Continue with Phone Number"
          icon="phone-portrait-sharp"
          iconBgColor={COLORS.PN_LOGO_BG}
          style={{backgroundColor: COLORS.PN_BTN}}
          onPress={() => console.log('phone login')}
        />
        {Platform.OS === 'ios' && (
          <AppAuthButton
            title="Continue with Apple ID"
            icon="ios-logo-apple"
            iconBgColor={COLORS.APPLE_LOGO_BG}
            style={{backgroundColor: COLORS.APPLE_BTN}}
            onPress={() => navigation.replace('phoneVerification')}
          />
        )}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <AppText textStyle={{color: COLORS.GRAY}}>
          By signing below you agree to the{' '}
        </AppText>
        <TouchableHighlight
          underlayColor={COLORS.BACKGOUND}
          onPress={() => console.log('Terms & Condition')}>
          <AppText textStyle={{textDecorationLine: 'underline'}}>
            Terms and Conditions
          </AppText>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch(setUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
